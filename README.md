# :hourglass_flowing_sand: poolink

![Update](https://img.shields.io/github/last-commit/tigermeal/poolink)
![Django](https://img.shields.io/badge/Django-v2.2.5-green)

`poolink` is killing-time web forum.

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

mysql >> CREATE DATABASE poolink;
<!-- Create 'poolink' database -->

mysql >> SHOW DATABASES;
<!-- Check databases -->

mysql >> USE poolink;
<!-- Use poolink database -->

$ python manage.py migrate
<!-- Migrate to mysql database -->

mysql >> EXPLAIN `tablename`;
<!-- In our case, EXPLATIN post_post; can show post app's model -->
<!-- Check your table's structure -->
```

## :card_file_box: Database (MySql) utf8 encoding error solution
```
<!-- Can solve error in django shell -->
$ python manage.py shell

>>> from django.db import connection
>>> cursor = connection.cursor()
>>> cursor.execute('SHOW TABLES')
>>> results = []
>>> for row in cursor.fetchall():
...     results.append(row)

>>> for row in results:
...     cursor.execute('ALTER TABLE %s CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;'%(row[0]))
```