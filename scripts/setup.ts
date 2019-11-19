/*
 * Set up
 *
 *
 */

import * as inquirer from "inquirer";

import { Print } from "./util";

enum Commands {
  SERVICE_ACCOUNT = "I have a service account",
  ENVIRONMENT_VARS = "Environment variables"
}

(async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "SetupCommand",
        message: "How would you like to set up your Firebase admin?",
        choices: [Commands.SERVICE_ACCOUNT, Commands.ENVIRONMENT_VARS]
      }
    ])
    .then(async (answers: any) => {
      const { SetupCommand } = answers;

      switch (SetupCommand) {
        case Commands.SERVICE_ACCOUNT:
          Print.info("Using service accounts");
          break;

        case Commands.ENVIRONMENT_VARS:
          Print.info("Using service accounts");
          break;

        default:
          throw Error("Invalid command passed");
      }
    });
})();
