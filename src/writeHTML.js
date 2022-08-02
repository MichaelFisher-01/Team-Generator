const fs = require('fs');

var allCards = ``;

const htmlGenerator = (employeeArray) => {
	employeeArray.forEach((employee) => {
		switch (employee.getRole()) {
			case 'Manager':
				icon = '<i class="fa-solid fa-mug-hot"></i>';
				specificInfo = `<div class="infoBox">OfficeNumber: ${employee.getOfficeNumber()}</div>`;
				break;
			case 'Engineer':
				icon = `<i class="fa-solid fa-glasses"></i>`;
				specificInfo = `<div class="infoBox">Github: <a href="https://github.com/${employee.getGitHub()}"</a> ${employee.getGithub()}</div>`;
				break;
			case 'Intern':
				icon = `<i class="fa-solid fa-graduation-cap"></i>`;
				specificInfo = `<div class="infoBox">School: ${employee.getSchool()}</div>`;
				break;
			default:
				console.log('The switch has failed');
		}

		var newCard = `<div class="card">
        <div class="cardTitle">
                <div class="name">${employee.getName()}</div>
                <div class="title">${icon} ${employee.getRole()}</div>
            </div>
            <div class="cardBody">
                <div class="infoBox">ID: ${employee.getId()}</div>
                <div class="infoBox">
                    Email:<a href="mailto:jard@gakemail.com"> ${employee.getEmail()}</a>
                </div>
                ${specificInfo}
            </div>
        </div>`;
		allCards += newCard;
	});
	var result = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"rel="stylesheet"/>
            <title>My Team</title>
        </head>
        <body>
            <div class="banner">My Team</div>
            <div class="row">
                <div class="container">${allCards}</div>
            </div>
        </body>
    </html>`;

	return result;
};

module.exports = htmlGenerator;
