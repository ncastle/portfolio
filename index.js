// require express & path
const express = require('express');
const path = require('path');

// set up app
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    let list = ['item1', 'item2', 'item3'];
	res.json(list);
	console.log('sent list of items')
});

// Handles requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// set app to listen on port
app.listen(port, () => console.log('App listening on port', port));
