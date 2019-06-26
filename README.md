# Somewhere

![interface](screenshots/interface.gif)

*`Somewhere`* is a friendly application that helps you to find a place with your ideal weather. Unlike other weather apps, `Somewhere` allows you to choose your preferred temperature, weather condition, and a nearby area to search. No need to fumble through dozens of locations on the weather channel! `Somewhere` is perfect for:
- ☀️/🍴 planning your picnic
- ☃️/🏂 getting a snowday going
- ☔️/💃 auditioning for *Dancing in the Rain*

`Somewhere` is powered by `Google Maps` and `Dark Sky` to bring you accurate, easy-to-navigate information.

Test drive the application here: [somewhere.zackzhu.com](http://somewhere.zackzhu.com)

## Table of Contents

1. [Requirements](#requirements)
1. [Usage](#Usage)

## Requirements

- `Node` v10.13.0 (LTS as of May 2019) or higher
- `yarn` or `npm`

## Deployment

#### Server
> 1. Install dependencies with `yarn` or `npm install`
> 1. The server launch script is `server/index.js`
> - If hosting your own version of `somewhere`, you must provide your own API keys:
>   - `Dark Sky` API key as an environment variable (`process.env.DARKSKY`)
>   - `Google Maps` API key as an environment variable (`process.env.GOOGLE`)
>   - The Google API key must have access to Google's `Geocoding`, `Maps JavaScript` and `Places` API's
> - The server uses port `5005` by default, but you may set it using an environment variable (`process.env.PORT`)

#### Client
> The client side is built using webpack:
>> `yarn start` or `npm run start`: Initiates a test server locally, used for development
>
>> `yarn build` or `npm run build`: Builds the client-side files for deployment