let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let users = (JSON.parse(xhr.responseText));

    let pop = [];
    
    for (let user of users) {
        pop.push(user['population']);
        
    }
    console.log(pop);
}

xhr.send();