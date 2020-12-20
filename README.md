# Topcoder Autopilot - Kafka Processor

## Dependencies

- Nodejs(v12+)
- Kafka

## Configuration

Configuration for the bulk record processor is at `config/default.js`.
The following parameters can be set in config files or in env variables:

- LOG_LEVEL: the log level; default value: 'debug'
- KAFKA_URL: comma separated Kafka hosts; default value: 'localhost:9092'
- KAFKA_CLIENT_CERT: Kafka connection certificate, optional; default value is undefined;
    if not provided, then SSL connection is not used, direct insecure connection is used;
    if provided, it can be either path to certificate file or certificate content
- KAFKA_CLIENT_CERT_KEY: Kafka connection private key, optional; default value is undefined;
    if not provided, then SSL connection is not used, direct insecure connection is used;
    if provided, it can be either path to private key file or private key content
- KAFKA_GROUP_ID: the Kafka group id, default value is 'autopilot-processor'
- NOTIFICATION_CREATE_TOPIC: the create action Kafka message topic, default value is 'challenge.notification.create'
- SCHEDULE_API_URL: The scedule executor api url
- CHALLENGE_API_URL: The topcoder users api, default value: 'https://api.topcoder-dev.com/v5/challenges'
- AUTH0_URL: The auth0 url
- AUTH0_AUDIENCE: The auth0 audience for accessing topcoder api(s)
- AUTH0_CLIENT_ID: The auth0 client id
- AUTH0_CLIENT_SECRET: The auth0 client secret
- AUTH0_PROXY_SERVER_URL: The auth0 proxy server url
- TOKEN_CACHE_TIME: The token cache time

There is a `/health` endpoint that checks for the health of the app. This sets up an expressjs server and listens on the environment variable `PORT`. It's not part of the configuration file and needs to be passed as an environment variable

## Local Kafka setup

### Install bin

- `http://kafka.apache.org/quickstart` contains details to setup and manage Kafka server,
  below provides details to setup Kafka server in Linux/Mac, Windows will use bat commands in bin/windows instead

### Local install with Docker

- Navigate to the directory `docker-kafka`
- Run the command `docker-compose up -d`

## Local deployment

1. Make sure that Kafka is running.

2. From the project root directory, run the following command to install the dependencies

    ```bash
    npm install
    ```

3. To run linters if required

    ```bash
    npm run lint
    ```

    To fix possible lint errors:

    ```bash
    npm run lint:fix
    ```

5. Start the processor and health check dropin

    ```bash
    npm start
    ```

## Local Deployment with Docker

To run the Bulk Record Processor using docker, follow the below steps

1. Navigate to the directory `docker`

2. Rename the file `sample.api.env` to `api.env`

3. Set the required auth0 config in the file `api.env`

4. Once that is done, run the following command

    ```bash
    docker-compose up
    ```

5. When you are running the application for the first time, It will take some time initially to download the image and install the dependencies

## Unit Tests and E2E Tests
Ensure that all config params (like auth params, and in the case of e2e tests, the challenge and executor api URLs) are all set to valid values. Then:

- Run `npm run test` to execute unit tests.
- Run `npm run test:cov` to execute unit tests and generate coverage report.
- RUN `npm run e2e` to execute e2e tests.
- RUN `npm run e2e:cov` to execute e2e tests and generate coverage report.
