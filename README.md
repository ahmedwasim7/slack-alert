 # Local Development Setup

## Technology stack

- Node 18.12.0

## Installation

### Requirements

Before you get started, the following needs to be installed:
  * **Node** 18.12.0
  * **NPM** 8.19.2
  * **nodemon** 2.0.20

### Requirements

### Setting up the development environment


1.  make .env file in root directory
    ```bash
    PORT= Your running port i.e 3000
    CHANNEL_NAME= channel name i.e #spam-alerts
    API_KEY= your Slack app token

    ```

2. Here's how to get Slack Api:
    ```
    - Go to the Slack API website and sign in to your Slack workspace.

    - Navigate to the "Your Apps" page and select the app you want to use for sending alerts.

    - Click on the "OAuth & Permissions" tab and scroll down to the "Scopes" section.

    - Click the "Add an OAuth Scope" button for Bot Token Scopes and following scopes:
        - chat:write
        - channel:read
        - group:read
        - group:write" scope from the list

    - Click the "Save Changes" button to update your app's permissions.

    - Click on the install to workspace button

    - Copy the API key that will be your Slack API_KEY for .env file
    ```

3.  Install nodemon by running the following command in the terminal:

    ```bash
    sudo npm install -g --force nodemon
    ```

4.  Install the required packages by running the following command in the project root directory:

    ```bash
    npm i
    ```

5.  Run server:

    ```
    npm start
    ```

6. For run test cases, Run following command

    ```
    npm test
    ```

## Run Through Docker
### Requirements

Before you get started with docker, the following needs to be installed:
  * **Docker** 20.10.22

### Setting up the docker environment

1.  You can also run script by configuring docker. You can download docker from here https://docs.docker.com/get-docker/

2.  After install, configure docker compose and run the following command:

    ```
    docker build -t .
    docker run -p :3000 -d
    ```

Congratulations! project should now be up and running for development purposes.

## Deploy to GPC
### Steps to follow

1. To install Google Cloud SDK please follow this https://cloud.google.com/sdk/docs/install  After you install it you be able to use gcloud commands.

2. Create Google Cloud Project and Configure Local Environment

```
gcloud projects create <project-name>
```

3. See your project

```
gcloud projects list
```

4. Get the project configuration with the following command if your project name is empty, follow the project id setting step, else skip it.

```
gcloud config list
```

5. If the project name is empty:

```
gcloud config set project <project-id>
gcloud config get-value project
```

6. Build and Deploy Docker Image with Google Cloud Commands

```
gcloud auth configure-docker
docker build -t gcr.io/<project-name>/nodejs-local-build .
docker images -a | grep gcr.io
```

7. Push the docker image to container registry

```
docker push  gcr.io/<project-name>/nodejs-local-build
```

8. Now we can deploy our Image to Compute Engine

9. Create Firewall Rules

10. Done your project is live







