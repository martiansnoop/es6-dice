var System = require('es6-module-loader').System;

System.import('./index').then(function(index) {
    console.log(index);
    index.run(__dirname);
}).catch(function(err){
    console.log('Error loading module: ', err);
});
