// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyBwxBRyEcszhfNUkeKwlBb03PVY63fCPiU',
    authDomain: 'expencetracker-ad102.firebaseapp.com',
    databaseURL: 'https://expencetracker-ad102.firebaseio.com',
    projectId: 'expencetracker-ad102',
    storageBucket: '',
    messagingSenderId: '415301912796'
  }
};
