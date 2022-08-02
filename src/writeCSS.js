const cssText = `body {
	margin: 0;
	font-family: 'Raleway';
}

.banner {
	display: flex;
	width: 100%;
	background-color: #e84756;
	color: white;
	height: 100px;
	font-size: 42px;
	justify-content: center;
	align-items: center;
}

.row {
	display: flex;
	align-items: center;
	justify-content: center;
}

.container {
	display: flex;
	flex-wrap: wrap;
	width: 900px;
	padding-top: 50px;
	justify-content: center;
	align-items: center;
}

.card {
	background-color: #f6f7f9;
	width: 225x;
	height: 300px;
	margin: 15px;
	box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5);
}

.cardTitle {
	background-color: #0077f7;
	color: white;
	padding: 12px;
	font-size: 28px;
	font-style: bold;
}

.cardBody {
	padding: 40px 20px 20px 20px;
}

.infoBox {
	background: white;
	width: 200px;
	border: 1px solid #f6f7f9;
	padding: 10px;
}`;

const generateCSS = () => {
	fileName = './dist/style.css';
	fs.writeFile(fileName, cssText, (err) =>
		err ? console.log(err) : console.log('CSS Generated Successfully')
	);
};

module.export = generateCSS;
