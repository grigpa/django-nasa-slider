from django.db import models
from filer.fields.image import FilerImageField


class Slide(models.Model):
    title = models.CharField("Название", max_length=255)
    image = FilerImageField(
        verbose_name="Картинка",
        on_delete=models.PROTECT,
        related_name="slider_slides",
    )
    position = models.PositiveIntegerField("Позиция", default=0, db_index=True)
    is_active = models.BooleanField("Активен", default=True)

    class Meta:
        verbose_name = "Слайд"
        verbose_name_plural = "Слайды"
        ordering = ["position", "id"]

    def __str__(self) -> str:
        return self.title