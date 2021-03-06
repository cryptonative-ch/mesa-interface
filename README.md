# Aqua Interface

Aqua is an open market for Initial DEX Offerings (IDO). Aqua Interface is the portal to create, manage and participate in IDOs.

## Build

Clone this repository. Make sure to clone the `main` branch. Install dependencies via NPM:

```
$ npm install
```

To run a development instance, run

```
$ npm run start
```

## Scripts

`package.json` has the following commands, you can run them using `yarn <command>` or `npm run <command>`

| Command           | Description                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start-mock`      | Runs the app in the development mode using the mock server as the endpoint. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.                          |
| `start-subgraph`  | Runs the app in the development mode using the local subgraph as the endpoint. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.                       |
| `start-xdai`      | Runs the app in the development mode using xDAI's subgraph as the endpoint. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.                          |
| `build-xdai`      | Builds the app for production using the xdai subgraph as the endpoint to the `build` folder.                                                                                        |
| `test`            | Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. |
| `build`           | Builds the app for production using the ethereum mainnet as the endpoint to the `build` folder.                                                                                     |
| `format`          | Formats all files in `src` according to [Prettier](https://prettier.io/) rules. See [`.prettierrc`](.prettierrc)                                                                    |
| `typechain`       | Builds typed-contracts classes to `src/contracts`                                                                                                                                   |
| `subgraph-server` | Starts a mocked version of the subgraph GraphQL server for local development.                                                                                                       |
