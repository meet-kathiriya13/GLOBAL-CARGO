const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(__dirname));

app.listen(port, () => {
  console.log(`Global Cargo server running at http://localhost:${port}`);
});
