![Alexia Starter Kit](alexia-starter-kit-logo-small.png "Alexia Starter Kit")

  [![Build Status][travis-image]][travis-url]
  [![Coverage Status][coveralls-image]][coveralls-url]

This starter kit is designed to get you up and running with Amazon Echo Skill developement in just couple of minutes. This project contains example application skeleton with unit tests, eslint config, http server startup and Lambda handler.

This project is based on [Alexia Framework](https://github.com/Accenture/alexia) - check out its repo for full feature list and deploy intructions.

Application contains fully working `HelloIntent` and `SearchIntent` examples. Feel free to modify or remove the HelloWorld functionality to get started developing your Alexa Skill.

## Quick Start

- clone this repo
- `npm install`
- `npm start`

## Project Structure

```
.
├── bin/                            # Binaries and utility scripts
│   └── generate.js                 # Runs speech assets generation
├── server/                         # Startup scripts for HTTP server & Lambda handler
│   ├── lambda-handler.js           # Request handler for AWS Lambda
│   └── start-http-server.js        # Starts HTTP Hapi server (Hapi is optional dependency)
├── src/                            # Application source code
│   ├── app.js                      # Main Alexa Skill entry point
│   ├── [common/]                   # Common services / utilities - used across intents
│   └── modules/                    # Intents grouped together in modular structure
│       ├── hello/                  # Hello Module
│       │   └── hello-intent.js     # Hello Intent
│       ├── search/                 # Search Module
│       │   ├── search-intent.js    # Search Intent
│       │   └── lookup-service.js   # Service used by Search Intent
│       └── ...
└── tests/                          # Unit tests. Should reflect src directory structure
```

Depending on the complexity of your application you may want to use flat structure and put all intents in the same directory. You are free to do so, but keep in mind that you have to modify the `./src/app.js` file to register all intents using the correct pattern or to register them manually. See [node-glob](https://github.com/isaacs/node-glob) for more pattern matching examples.

## Scripts

- `npm start` - start http server
- `npm run mon` - start http server using nodemon as watcher
- `npm run gen` - generate and save speech assets to directory
- `npm run deploy` - deploy application to AWS Lambda using [Serverless](https://serverless.com/framework/)
- `npm test` - run unit tests
- `npm run test:dev` - run unit tests in development mode using nodemon as watcher
- `npm run lint` - run eslint
- `npm run lint:fix` - run eslint and automatically fix problems

## Contributing

Alexia Starter Kit is an open source project and we encourage contributions. Please make sure to cover your code with unit tests.

For more information refer to general guide [Contributing to Open Source](https://guides.github.com/activities/contributing-to-open-source/)

## License

[Apache 2.0](LICENSE)

  [travis-image]: https://img.shields.io/travis/Accenture/alexia-starter-kit/master.svg
  [travis-url]: https://travis-ci.org/Accenture/alexia-starter-kit
  [coveralls-image]: https://coveralls.io/repos/github/Accenture/alexia-starter-kit/badge.svg?branch=master
  [coveralls-url]: https://coveralls.io/github/Accenture/alexia-starter-kit?branch=master
