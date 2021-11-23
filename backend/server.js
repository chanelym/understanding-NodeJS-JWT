/*
*
* File: server.js
* Description: Here is where this app executes and sets up everything needed
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`);
});