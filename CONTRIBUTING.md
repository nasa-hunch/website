# Contributing

## Setup

We have a `docker-compose.yml` file that will start a local development environment for you. You can start it by running:

```bash
docker compose up
```

This starts up the main web server, a PostgreSQL database, and a S3-compatible storage server. You can access the web server at `http://localhost:3000`.

If you want the production environment, you can run:

```bash
docker compose -f .\docker-compose.yml -f .\docker-compose.test.yml up
```

## Testing

Once you have the development environment running, you can run the tests by running:

```bash
pnpm run test
```

To run specific integration tests (powered by Playwright), you can use:

```bash
pnpm run test:integration -- -g "test name"
```

To debug the tests, you can add the `--debug` flag to the test command.
