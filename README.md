# Refactoring's Sentry Log Server

Sentry is a service that helps you monitor and fix crashes in realtime. The server is in Python, but it contains a full API for sending events from any language, in any application.

## Getting started

Set the environments variables

```sh
mv .env.example .env
```

Generate Sentry's secret key

```sh
docker compose run --rm sentry_web config generate-secret-key;
```

Replace ```SENTRY_SECRET_KEY``` in ```.env``` file and run the sentry migrations.

```sh
docker compose run --rm sentry_web upgrade;
```

Run all containers

```sh

docker compose up -d;
```
