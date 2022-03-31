/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const debug = require("debug");
const path = require("path");
const gmail_tester = require("../../node_modules/gmail-tester");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
require("dotenv").config();

module.exports = (on, config) => {
  // modify env value
  console.log(config);
  // return config
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    "gmail:get-messages": async (args) => {
      const messages = await gmail_tester.get_messages(
        path.resolve(__dirname, "../../", "credentials.json"),
        path.resolve(__dirname, "../../", "gmail_token.json"),
        args.options
      );
      return messages;
    },
  });
};
