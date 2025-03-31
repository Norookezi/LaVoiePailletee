<div align="center">
    <img src="./public/favicon.ico" style="width: 10rem" alt="">
    <h1>La voie pailletée</h1>
</div>
<div align="center">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/node-22.14.0-5FA04E?logo=nodedotjs&style=for-the-badge" alt="Node 22.14.0">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/react-19.0.0-61DAFB?logo=react&style=for-the-badge" alt="React 19.0.0">
</div>

<h2>How to install</h2>

### Developer
#### Clone the project
```sh
$ git clone https://github.com/Norookezi/LaVoiePailletee.git
```
#### With docker compose
To start the server
```sh
$ #Start
$ docker compose build
$ docker compose up -d
$ #The server will start on port 3000 with his own Nginx instance

$ #Stop
$ docker compose down
```
#### Manually
1. Go to the lastest release [here](https://github.com/Norookezi/LaVoiePailletee/releases)
2. Download [the latest built file](https://github.com/Norookezi/LaVoiePailletee/releases/latest/download/build.zip)
3. Unzip the release in your Nginx, Apache or alternative HTTP web server

And voilà, your project is ready

## Lint
### Eslint rules
- Typescipt eslint recommended rules
- Indentation width: **4 space**
- Trailing semicolon: **required**
- Prefer const: **off** *(Temporary due to missing methods)*
- Quotes: **single** *(Magic quotes are allowed if template string)*
- Custom aria-role: **text**

In order to keep a clean code base, devs might use eslint before commits

```sh
$ npm run lint
```

## Development
### Commands
```sh
$ npm run start
```
This command will start the project in dev mode, each modification will be updates on save

It allows the devs to create without having to refresh the pages each time

It will also allow be less strict on error such as unused variables and other

```sh
$ npm run build
```
This will allow devs to have a built version to export it or see if the project is correctly build
**If you want to be really sure that the project can be built in prod or preprod follow these instructions**
1. Create a ``.env.local`` in the main folder which will be ignored in the commit
2. In this ``.env.local`` add ``CI=true``
3. Now run ``npm run build``

``CI=true`` will enable continuous integration mode like the github actions 
pipelines which prevent build on any error or warning
```sh
$ npm run lint
```
This command will check each file for eslint rules violation such as double quotes, unused variables or wrong indentation width and raise warnings

**Please fix each warning before commit**

## Copyright and license
This project is an order for the charity [SolidaryGames](https://paa.ge/solidarigames) and [La voie pailletée](https://linktr.ee/LaVoiePailletee)

Every images, texts and files belong to them

<div align="center">
<img style="margin: 80px" src="https://img.shields.io/badge/Made with ❤️ by H0ldhaven & Norookezi-333?style=for-the-badge" alt="Made with heart by Norookezi and H0ldhaven">
</div>