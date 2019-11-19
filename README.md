# Query Firebase

## Installation

```sh
# Locally in your project.
npm install
```


## Usage

```sh
# Starts a REPL-like process
npm run shell

# In our "REPL"
> admin.database().ref('/users').once('value')
> { ... }
```
