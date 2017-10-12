This is demo of loan mobile app to learn Angular 2 and Ionic 2. 

### download source code
```bash
git clone https://github.com/euter/LoanKeeper.git
```
### Set up the Development Environment
Install [Node.js](https://nodejs.org/en/download/) and npm if they are not already on your machine.
Then install the Angular CLI globally.
```bash
$ npm install -g @angular/cli
```

### Ionic CLI:

```bash
$ sudo npm install -g ionic cordova
```

Then, to run it, cd into `LoanKeeper` and run:

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```
or on android emulator:
```bash
$ ionic cordova platform add android
$ ionic cordova emulate android -lcs
```

Substitute android for ios if on a Mac.

