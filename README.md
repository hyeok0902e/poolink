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

