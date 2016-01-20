'use strict';

var Colors = require('../colors');
var ColorManipulator = require('../../utils/color-manipulator');
var Spacing = require('../spacing');

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.lightBlue900,
    primary2Color: '#97bad6',
    primary3Color: Colors.grey400,
    accent1Color: Colors.grey600,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
  }
};