# styleplate
---
A sensible living styleguide solution built on [kss-node](https://github.com/kss-node/kss-node) and [Gulp](http://gulpjs.com/).

## Installation
Run `npm install` to get the required dependencies.

## Usage
To get started run `gulp styleguide`. This will compile the styleguide and load it into your browser. You should see the main page welcoming you to the styleguide. This page can be customized by editing the `styleguide.md` file in the sass folder.

The styleplate workflow consists of creating documented scss files and html files containing example markup. The expectation is that these two files will be created within a folder within the sass folder.

Example folder structure:
```
sass/
  buttons/
    _buttons.scss
    buttons.html
```

Newly added scss files should be included in the style.scss file in order for them to be compiled. Each scss file should include kss syntax at the top that will enable it to be picked up by the styleguide. Here is an example of the expected format from the [kss-node](https://github.com/kss-node/kss-node) repository:
```scss
// Button
//
// Your standard button suitable for clicking.
//
// :hover   - Highlights when hovering.
// .shiny   - Do not press this big, shiny, red button.
//
// Markup: button.html
//
// Style guide: components.button
.button {
  ...
}
.button.shiny {
  ...
}
```

You can learn about the syntax and how it works by looking at the [KSS syntax](http://warpspire.com/kss/syntax/) documentation.

You can now add as many stylesheet/markup examples as necessary for your project. The project will reload the browser when changes are made, so you can instantly see your progress.

## Including as a dependency on another project
You can easily add styleplate to it's companion project [baseplate](https://github.com/demersdesigns/baseplate) or even to another project with some minor handiwork. In short, this project is on NPM and can be included as a dependency in the package.json of an your existing project.

Here is what should be included in your package.json in order to pull the project into your node_modules folder:
```
"devDependencies": {
    "@demersdesigns/styleplate": "0.1.0"
  }
```

This enables you to include the scss files that you have created in your styleguide in your project's main stylesheet like so:
`@import "../node_modules/styleplate/sass/buttons/buttons";`
