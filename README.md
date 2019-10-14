# :hourglass_flowing_sand: siganbang

![Update](https://img.shields.io/github/last-commit/tigermeal/siganbang)
![Django](https://img.shields.io/badge/Django-v2.2.5-green)

`siganbang` is killing-time web forum.

## :rocket: Install

Before launching the project, you have to install packages.

```
$ pip install -r requirements.txt
```

## :pencil: Branch naming rules

- `build/something`
    - Main build branch
    - ex. `build/django-backend`

- `feature/something`
    - Feature test branch for main build codes
    - Named basing on `build/something`
    - ex. `feature/django-backend/<feature_name>`

- `fix/something/<issue_num>/explain`
    - Issue fix branch for main build codes
    - ex. `fix/django-backend/#123/route_fix`

## :card_file_box: Database (MySql)

```
$ mysql -uroot -p
<!-- Enter your password -->

mysql >> CREATE DATABASE siganbang;
<!-- Create 'siganbang' database -->

mysql >> SHOW DATABASES;
<!-- Check databases -->

mysql >> USE siganbang;
<!-- Use siganbang database -->

$ python manage.py migrate
<!-- Migrate to mysql database -->

mysql >> EXPLAIN `tablename`;
<!-- In our case, EXPLATIN post_post; can show post app's model -->
<!-- Check your table's structure -->
```