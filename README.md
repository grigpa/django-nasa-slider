# NASA Slider Test (Django + Bootstrap + Slick)

Тестовое задание: страница по макету с галереей изображений из админки.

## Технологии
- Python 3.12
- Django 5.2
- MySQL
- Bootstrap 5
- Slick Slider
- django-filer
- django-admin-sortable2

---

## Установка

### 1. Клонировать репозиторий
git clone <repo_url>
cd <project>

### 2. Создать виртуальное окружение
python -m venv .venv
source .venv/bin/activate

### 3. Установить зависимости
pip install -r req.pip

---

## База данных MySQL

Создать БД:

- CREATE DATABASE slider_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
- CREATE USER 'slider_user'@'localhost' IDENTIFIED BY 'slider_pass';
- GRANT ALL PRIVILEGES ON slider_db.* TO 'slider_user'@'localhost';
- FLUSH PRIVILEGES;

---

## Переменные окружения

Создать файл `.env`:

DJANGO_SECRET_KEY=secret

DJANGO_DEBUG=1

DB_NAME=slider_db

DB_USER=slider_user

DB_PASSWORD=slider_pass

DB_HOST=127.0.0.1

DB_PORT=3306

---

## Миграции и запуск

- python manage.py migrate
- python manage.py createsuperuser
- python manage.py runserver

Открыть:
- http://127.0.0.1:8000
- http://127.0.0.1:8000/admin

---

## Использование

1. В админке создать слайды  
2. Загрузить изображения через django-filer  
3. Отсортировать drag&drop  
4. Слайды автоматически появятся на странице  

---

## Особенности реализации

- Slick Slider с синхронизацией миниатюр  
- Fullscreen галерея (Bootstrap modal + carousel)  
- Изображения через django-filer  
- Сортировка django-admin-sortable2  
- Полностью адаптивная верстка  

---

## Зависимости (req.pip)

Django==5.2.*  
PyMySQL>=1.1  
python-dotenv>=1.0  
django-filer>=3.0  
easy-thumbnails>=2.8  
django-mptt>=0.15  
django-admin-sortable2>=2.1  
Pillow>=10.0  
mysqlclient==2.2.8  

---

## Самопроверка

rm -rf .venv  
python -m venv .venv  
source .venv/bin/activate  
pip install -r req.pip  
python manage.py migrate  
python manage.py runserver  
