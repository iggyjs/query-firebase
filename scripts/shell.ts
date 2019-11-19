/*
 * Shell
 *
 *
 */

import * as admin from "firebase-admin";
import * as inquirer from "inquirer";

import { Print } from "./util";

admin.initializeApp();
admin.firestore().settings({ timestampsInSnapshots: true });

Print.info("Running query cli ...");

const PromptQueryCommand = async () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "QueryCommand",
        message: ">",
        prefix: ""
      }
    ])
    .then(async (answers: any) => {
      const { QueryCommand } = answers;
      if (!QueryCommand) {
        PromptQueryCommand();
        return;
      }

      const isFirestore = QueryCommand.includes("firestore");

      try {
        const res = await eval(QueryCommand);
        const val = isFirestore ? res.data() : res.val();
        console.log(val);
      } catch (e) {
        console.log(e);
      }

      // Re-call inquirer
      PromptQueryCommand();
    });
};

PromptQueryCommand();
