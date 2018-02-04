// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
  	apiKey: "AIzaSyAY2qT2BCYOkIiJ0WbRMWBNB-iV2eEVdJE",
    authDomain: "codeando-ccea8.firebaseapp.com",
    databaseURL: "https://codeando-ccea8.firebaseio.com",
    projectId: "codeando-ccea8",
    storageBucket: "codeando-ccea8.appspot.com",
    messagingSenderId: "293307513377"
  }
};
