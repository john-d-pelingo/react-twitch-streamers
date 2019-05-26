# react-twitch-streamers

🖥 React web app for displaying twitch streamers with the usage of Twitch API

Try the demo at [https://pensive-elion-127e92.netlify.com](https://pensive-elion-127e92.netlify.com).

## Quick Setup

Install all of the application's dependencies:

`yarn install` or `npm install`

Next, you can start the application in a local environment with:

`yarn start` or `npm run start`

Open your browser to `http://localhost:3000` to see the app running.

Otherwise, you can build the application into a `<rootDir>/build` directory with:

`yarn build` or `npm run build`

After that you can serve the optimized build at `http://localhost:8080` by default locally with:

`yarn serve` or `npm run serve`

## Yarn/NPM Commands

| Script                            | Description                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------- |
| `yarn build` or `npm run build`   | Build the application and emit the bundles to the `<rootDir>/build` folder                    |
| `yarn lint` or `npm run lint`     | Lint the source code                                                                          |
| `yarn pretty` or `npm run pretty` | Prettify the source code by enforcing a consistent code style                                 |
| `yarn serve` or `npm run serve`   | Serve the optimized build in the `<rootDir>/build` directory @ `localhost:8080` by default    |
| `yarn start` or `npm start`       | Start webpack development server @ `localhost:3000` by default                                |
| `yarn sweep` or `npm run sweep`   | Delete the `<rootDir>/build` and `<rootDir>/coverage` directories                             |
| `yarn test` or `npm test`         | Run a test sequence                                                                           |
| `yarn test:c` or `npm run test:c` | Run a test sequence with the code coverage results emitted to the `<rootDir>/coverage` folder |
| `yarn w:test` or `npm run w:test` | Watch for changes and retest                                                                  |
