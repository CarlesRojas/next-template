## Initial setup

Install nvm following steps **1** and **2** from here:
https://tecadmin.net/install-nvm-macos-with-homebrew/

Install the `lts` version of node by running these:
`nvm use`
`nvm install`

## Run project locally:

Install all dependencies with:
`yarn install`

Start dev with:
`yarn dev`

Build with:
`yarn build`

## Linting

Linting is configured in the `.eslintrc.json` file.

Check linting with:
`yarn lint`

## Code Formatting

Code Formatting is configured in the `.prettierrc` file.

Format your code with:
`yarn prettier`

## Committing

Commit messages should follow this pattern:
`feat: commit message`

These are the available prefixes:
`docs`: Documentation only changes
`feat`: A new feature
`fix`: A bug fix
`perf`: A code change that improves performance
`refactor`: A code change that neither fixes a bug nor adds a feature
`revert`: To revert a previously made change
`style`: Changes that do not affect the meaning of the code
`test`: Adding missing tests or correcting existing tests
