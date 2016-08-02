# Raid Ready API

### Description
Back End of [*Raid Ready*](https://github.com/OMGDuke/raid-ready). Retrieves data from the BNet API. A live demo of Raid Ready is available [*here*](https://raid-ready.herokuapp.com)

### Installation
- Clone this repo.
- Run `npm install`
- Create .env in root.
- Add the line `WOW_API_KEY="yourKeyHere"` to .env
- Add the line `require('dotenv').config();` to app/server.js
- Run `npm start`
- Visit http://localhost:3000/bnet?server=yourServerName&guild=yourGuildName

### Tests
- Run `npm start`
- Run `npm test`
