from django.contrib import admin
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin

from .models import Slide


@admin.register(Slide)
class SlideAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("preview", "title", "is_active")
    list_editable = ("is_active",)
    search_fields = ("title",)
    ordering = ("position", "id")  # важно: position используется sortable2
    list_per_page = 50

    fields = ("title", "image", "preview_big", "is_active")
    readonly_fields = ("preview_big",)

    def preview(self, obj: Slide):
        if obj.image_id and getattr(obj.image, "url", None):
            return format_html(
                '<img src="{}" style="height:48px;width:auto;border-radius:6px;object-fit:cover;" />',
                obj.image.url,
            )
        return "—"

    preview.short_description = "Картинка"

    def preview_big(self, obj: Slide):
        if obj.image_id and getattr(obj.image, "url", None):
            return format_html(
                '<img src="{}" style="max-height:240px;width:auto;border-radius:10px;" />',
                obj.image.url,
            )
        return "—"

    preview_big.short_description = "Предпросмотр"