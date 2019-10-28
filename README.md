# :hourglass_flowing_sand: poolink

![Update](https://img.shields.io/github/last-commit/tigermeal/poolink)

![Django](https://img.shields.io/badge/Django-v2.2.5-green)

![Pip](https://img.shields.io/badge/pypi-v19.3.1-blue)


`poolink` is newbie's web forum making project.

## :rocket: Installation

Before launching the project, you have to install packages.

Install using `pip`

:rotating_light: Please, Install package of pip in virtual environment

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

## :wrench: Database (MySql) utf8 encoding error solution
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

## :sparkles: Token Test
```
<!-- Check user's token -->
$ curl -X POST -d "email=<user-email>&password=<password>" http://127.0.0.1:8000/api/auth/token/

<!-- Check permission when permission set as IsAuthenticated -->
$ curl http://127.0.0.1.8000/api/comments/
$ curl -H "Authorization: JWT <User Token>" http://127.0.0.1:8000/api/comments/

<!-- Try POST Method using Token  -->
$ curl -X POST -H "Authorization: JWT <User Token>" -H "Content-Type: application/json" -d '{"title":"token try", "content": "token try"}' 'http://127.0.0.1:8000/api/posts/'

```