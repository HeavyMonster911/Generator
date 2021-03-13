function getPasswordENG(){

    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() *  chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("generatorENG").value = password
}

function getPasswordRUS(){

    var chars = "0123456789йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ!@#$%^&*()_+><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() *  chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("generatorRUS").value = password
}

function getPasswordESP(){

    var chars = "0123456789qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMºª·/=?¡¿çÇÑ!@#$%^&*()_+><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() *  chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("generatorESP").value = password
}

function getPasswordUKR(){

    var chars = "0123456789йцукенгшщзхїфівапролджєячсмитьбюЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ!@#$%^&*()_+><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() *  chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("generatorUKR").value = password
}