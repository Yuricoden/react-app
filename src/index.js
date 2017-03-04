var conttt = require('./scss');

var App = function() {
    var div = document.createElement('div');
    div.className = "alert alert-success";
    div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

    document.body.insertBefore(div, document.body.firstChild);
    document.write('ghkjkdhfghgh');
};



var app = new App();
app.get = function() {};

