# HackRVA.org
This a dockerized wordpress site [hackrva.org](https://hackrva.org)

## database
The database is not included in this repo.  If you are looking to restore this site, you will have to pull the database from a backup.

Create a folder `database/initdb.d` to store sql files that should run at container initialization.

## .env

Environment variables are stored in a `.env` file that is not committed to this repo.
Contents of `.env` should look like the following:

```
MYSQL_ROOT_PASSWORD=somevalue
MYSQL_DATABASE=somevalue
MYSQL_USER=somevalue
MYSQL_PASSWORD=somevalue
```
