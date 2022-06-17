## Initial setup

Install nvm following steps **1** and **2** from here:
https://tecadmin.net/install-nvm-macos-with-homebrew/

Install the `lts` version of node by running these:
`nvm use`
`nvm install`

## Run project locally:

Install all dependencies with:
`yarn install`

Start dev server with:
`yarn dev`

Build with:
`yarn build`

## Folder Structure

```
next-template
    __tests__           Contains all tests for the app
    public              Contains all public assets
    src
        components      Contains reusable components
        context         Contains all context providers (global state)
        hooks           Contains custom hooks
        pages           Contains every page that ios asociated with a route
    styles              Contains all styles
```

The `__tests__` and `styles` folders should have the same subfolders as the repo (components, hooks, pages...)

## Testing

All tests should be written in the `__tests__` folder.

Execute all tests with:
`yarn test`

## Linting

Linting is configured in the `.eslintrc.json` file.

Check linting with:
`yarn lint`

## Code Formatting

Code Formatting is configured in the `.prettierrc` file.

Format your code with:
`yarn format`

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
