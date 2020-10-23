# COVID-19 STAT

A simple COVID-19 coronavirus statistics web application. 

[Live Demo](https://covid-19-stat.net) on Firebase.

<p align="center">
  <img width="700" src="https://github.com/yasuhikomachino/covid-19-stat/blob/master/images/site_image.jpg" />
</p>

## Environment

- Docker 19.03.12
- docker-compose 1.26.2

## Stack

- Node 14.11.0
- React 16.14.0
- TypeScript 3.9.7
- firebase-tools 8.13.0 

## Setup 

```
$ docker-compose build
$ docker-compose up -d
```

## Run Development Server

```
$ docker-compose exec node /bin/ash 
```
```
# yarn start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.


## Build

Builds the app for production.

```
# yarn build
```


## Deploy(Firebase)

Creates `.firebaserc` from template file and replace `projects.default` value with your Firebase Project ID.

```
# cp .firebaserc.example .firebaserc
```

Login to Firebase and deploy the app.

```
# firebase login --no-localhost
# firebase deploy 
```


## Data Source

- [COVID19 API](https://covid19api.com/)