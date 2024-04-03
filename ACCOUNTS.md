# Accounts

All passwords are `password`, with an optional suffix in demo environments.

## Hunch Admin

- `admin@nasa.fake`

## School Admin

- `admin@card.board`

## Sub accounts

- `org` is the org number, from 1 - ~100
- `project` from 0 - 4

`{org}@project{project}.teacher`, i.e. `5@project4.teacher`

- `student` from 0 - 3

`{org}@project{project}.student{student}`, i.e. `3@project2.student1`

- `unapproved`, to be safe, pick `0`, but it can be either `0` or sometimes `1`

`{org}@project{project}.unapproved{unapproved}`, i.e. `3@project2.unapproved1`
