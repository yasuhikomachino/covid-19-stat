FROM node:14.13.1-alpine3.12
SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]

ARG firebase_tools_version="8.12.1"

RUN apk update && \
    npm install -g firebase-tools@${firebase_tools_version} && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /workspace