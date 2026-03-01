from django.shortcuts import render
from slider.models import Slide

def home(request):
    slides = Slide.objects.filter(is_active=True).order_by("position", "id")
    return render(request, "pages/home.html", {"slides": slides})