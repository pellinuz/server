const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Avvia il server solo quando viene ricevuta la richiesta a /avvia-server
app.get('/avvia-server', (req, res) => {
	app.listen(port, () => {
		console.log(`Server Express in ascolto sulla porta ${port}`);
		res.send('Server avviato!');
	});
});
