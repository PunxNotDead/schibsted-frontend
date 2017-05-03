# Frontend part of Schibsted test task

# Installation & running

`npm install`

`npm start`

Navigate to [http://localhost:8080](http://localhost:8080) in browser.

By default webpack building bundle.json into memory. If you wand files, run `npm run build`

# Description

This is front end part of test task, backend part is situated here: [schibsted-backend](https://github.com/PunxNotDead/schibsted-backend)

Every request to /api proxied to localhost:3001

# Technologies

* React / Redux / React Saga / React Router
* LESS
* Bootstrap as CSS framework
* Webpack

# What is omitted

* Config for production mode for webpack (uglify and so on)
* Not fixed warning `Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.` because of little bit outdated external lib for ratings