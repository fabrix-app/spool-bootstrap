# spool-bootstrap

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

Spool to run a bootstrap function when Fabrix server is ready.

## Usage
Load in your spool config.

```js
// config/main.ts
export const main = {
  // ...
  spools: [
    require('@fabrix/spool-bootstrap').BootstrapSpool
  ]
}
```

## Config

```js
// config/bootstrap.ts
export const bootstrap = function(app){

}
```

## License
[MIT](https://github.com/fabrixjs/spool-bootstrap/blob/master/LICENSE)


[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-bootstrap.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-bootstrap
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-bootstrap/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-bootstrap/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-bootstrap.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-bootstrap
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-bootstrap.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-bootstrap/coverage
