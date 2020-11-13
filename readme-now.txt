Node.js 10 This is an LTS (long term support) release
Express 4--
MongoDB 3.6 Community Edition
React 16--
React Router 4--
React Bootstrap 0.32	There is no 1.0 release yet, things may break with 1.0
Bootstrap 3 This is compatible with 
React Bootstrap 0 (and 1 when released)
Webpack 4--
ESLint 5--
Babel 7-

**Command to change the npm version:
npm install –g npm@6
--save-dev

Para ver los paquetes instalados
npm ls --depth=0

at package.json there is a main
Note that there is also a field called main in package.json. When we initialized this file, the value of this field 
was set to index.js automatically. This field is not meant for indicating the starting point of the server. 
Instead, if the package was a module (as opposed to an application), index.js would have been the file to load 
when the project is imported as a module using require() in other projects. Since this project is not a module 
that can be imported in other projects, this field is not of any interest to us, and neither do we have index.js in 
the source code