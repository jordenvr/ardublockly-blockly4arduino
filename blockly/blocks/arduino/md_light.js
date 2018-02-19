/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Microduino functions.
 *     The Arduino built in functions syntax can be found at:
 *     https://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.md_light');

goog.require('Blockly.Blocks');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.md_light.HUE = 512;

/** Attach a LED block to the hub*/
Blockly.Blocks['mcookie_neopixel_setup'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .appendField(new Blockly.FieldImage("media/MD/MDLed.png", 19, 19, "*"))
        .appendField(Blockly.Msg.ARD_NEOPIXEL)
        .appendField(
            new Blockly.FieldInstance('LedStrip',
                                      Blockly.Msg.ARD_NEOPIXEL_DEFAULT_NAME,
                                      true, true, false),
            'LEDNAME')
        .appendField(Blockly.Msg.ARD_NEOPIXEL_STRIP);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_NEOPIXEL_PIXELS);
    this.setOutput(true, 'HUB_DIGOUT');
    this.setColour(Blockly.Blocks.md_light.HUE);
    this.setTooltip(Blockly.Msg.ARD_NEOPIXEL_TIP);
    this.setHelpUrl('https://wiki.microduino.cc/index.php/Microduino_Sensor_Series');
  },
  /**
   * Set the connection pins that the component connects to
   * @param {array} array of the connections (as string, eg '1', 'SDA', 'A1', ...
   * @this Blockly.Block
   */
  setHubConnector: function(connector) {
    this['connector'] = connector;
  },
  /**
   * Gets the variable type required.
   * @param {!string} varName Name of the variable selected in this block to
   *     check.
   * @return {string} String to indicate the variable type.
   */
  getVarType: function(varName) {
    return Blockly.Types.NUMBER;
  }
};
