# volto-custom-html-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-custom-html-block)](https://github.com/eea/volto-custom-html-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-custom-html-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-custom-html-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-custom-html-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-custom-html-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-custom-html-block&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-custom-html-block&branch=develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-custom-html-block with Docker

      git clone https://github.com/eea/volto-custom-html-block.git
      cd volto-custom-html-block
      make
      make start

Go to http://localhost:3000

### Add volto-custom-html-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-custom-html-block"
   ],

   "dependencies": {
       "@eeacms/volto-custom-html-block": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-custom-html-block
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-custom-html-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-custom-html-block/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-custom-html-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
