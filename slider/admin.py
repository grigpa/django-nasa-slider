from django.contrib import admin
from .models import Slide


@admin.register(Slide)
class SlideAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "position", "is_active")
    list_editable = ("position", "is_active")
    search_fields = ("title",)
    ordering = ("position", "id")