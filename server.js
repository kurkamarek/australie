const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
//static folder Public
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));