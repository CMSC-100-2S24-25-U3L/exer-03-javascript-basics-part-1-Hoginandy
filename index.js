function validatePassword(pass1, pass2) {
    if (pass1 == pass2) { // checks if the passwords are equal
        if (pass1.length >= 8) { // checks if the password length is greater than or equal to 8 characters
            if (passwordChecker(pass1) == true) { // checks if the password is valid
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}


function passwordChecker(password) {
    let numbercount = 0;
    let lowercasecount = 0;
    let uppercasecount = 0;
    const loweralphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperalphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i]) == false) { // checks if character is a number
            numbercount += 1;
        }
        if (password[i].toUpperCase() == password[i] && upperalphabet.includes(password[i]) == true) { // checks if character is uppercase
            uppercasecount += 1;
        }
        if (password[i].toLowerCase() == password[i] && loweralphabet.includes(password[i]) == true) { // checks if character is lowercase
            lowercasecount += 1;
        }
        if (numbercount >= 1 && lowercasecount >= 1 && uppercasecount >= 1) { // if all three criteria have a minimum of 1, return true
            return true;
        }
    }
    return false;
}


function reversePassword(password) {
    var newpassword = ""; // new password string
    for (let i = password.length - 1; i > -1; i--) { // reversal of string
        newpassword = newpassword.concat(password[i]);
    }
    return newpassword;
}


function storePassword(name, password, newpassword) {
    if (validatePassword(password, newpassword) == true) { // validation of password
        password = reversePassword(password); // reversal of password
    }

    const info = { // object instantiation
        name: name,
        password: password
    }

    return info;
}


console.log(storePassword("leon", "Whatsup!1", "Whatsup!1"));