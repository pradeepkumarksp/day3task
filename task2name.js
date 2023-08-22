let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let users = (JSON.parse(xhr.responseText));

    let names = [];
    let countryname = [];
    for (let user of users) {
        names.push(user['name']);
        for (name of names) {
            countryname.push(name["common"])
        }
    }
    console.log(countryname);
}

xhr.send();