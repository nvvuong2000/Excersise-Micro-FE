
# How to use

**Required:** Must have Docker Desktop and started on your local.

### To start Docker

Run via docker:
> docker compose up -d

Run via yarn:
> yarn docker:start

### To stop Docker

Run via docker:
> docker compose down -v

Run via yarn:
> yarn docker:stop

After all containers started, access to URL http://localhost:4000
for Hasura console then login with secret key `HASURA_GRAPHQL_ADMIN_SECRET`
from `.env` file.

### Backup data from PostgreSQL and Hasura
*(We should run backup data when have new update on this service.)*

Run via yarn:
> yarn data:backup

### Restore data to PostgreSQL and Hasura
*(We should restore data the first time when running this service.)*

Run via yarn:
> yarn data:restore