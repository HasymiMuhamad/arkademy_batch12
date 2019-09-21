function validasiUsername(username, password) {
    var regexUsername = /^[a-z]{3}[a-z]{2,6}$/ ;
    var regexPassword = /^[a-z][0-9][A-Z]{3}[a-z][0-9][A-Z]{7}$/ ;

   

    var hasilUsername = regexUsername.test(username) ;
    var hasilPassword = regexPassword.test(password) ;

    console.log(hasilUsername);
    console.log(hasilPassword);

    if ((hasilUsername == true) && (hasilPassword == true)) {
        
        console.log("Username dan Password Valid") ;
    } else {
        console.log("Username dan Password Tidak Valid") ;
    }


}

validasiUsername('pasukanda', 'aaweu9ouiL');

