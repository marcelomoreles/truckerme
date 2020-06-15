// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCDoTvpD-Xq8GOszpnyI35DW9DZRBaKV-o",
    authDomain: "tracker-280322.firebaseapp.com",
    databaseURL: "https://tracker-280322.firebaseio.com",
    projectId: "tracker-280322",
    storageBucket: "tracker-280322.appspot.com",
    messagingSenderId: "286734186349",
    appId: "1:286734186349:web:f74ecef444a8f8d5d40c64",
    measurementId: "G-7HTXWKCQMG"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
