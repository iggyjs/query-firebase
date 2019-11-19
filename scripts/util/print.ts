import * as chalk from "chalk";

export namespace Print {
  export function info(text: string) {
    console.log(chalk.cyan(text));
  }

  export function success(text: string) {
    console.log(chalk.green(text));
  }

  export function warning(text: string) {
    console.log(chalk.yellow(text));
  }

  export function error(text: string) {
    console.log(chalk.red(text));
  }
}
