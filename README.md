# :hourglass_flowing_sand: siganbang

![Django](https://img.shields.io/badge/Django-v2.2.5-green)

`siganbang` is killing-time web forum.

## :rocket: Install

```
$ pip install -r requirements.txt
```

## :pencil: Branch naming rules

- `build/something`
    - Main build branch
    - ex. `build/django`

- `feature/something`
    - Feature test branch for main build codes
    - Named basing on `build/something`
    - ex. `feature/django/<feature_name>`

- `fix/something/<issue_num>/explain`
    - Issue fix branch for main build codes
    - ex. `fix/django/#123/route_fix`

## :card_file_box: Database

```
$ mysql -uroot -p
<!-- enter your password -->

mysql >> CREATE DATABASE siganbang;
<!-- create 'siganbang' database -->

mysql >> SHOW DATABASES;
<!-- check databases -->

mysql >> USE siganbang;
<!-- use siganbang database -->

$ python manage.py migrate
<!-- migrate to mysql database -->

mysql >> EXPLAIN `tablename`;
<!-- in our case, EXPLATIN post_post; can show post app's model -->
<!-- check your table's structure -->
```