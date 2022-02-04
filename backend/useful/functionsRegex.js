function validateName(name){
    name = name.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/, " ");
    if (name == "") {
        return "Please enter a valid name!"
    } else {
        return "The name you entered is valid!"
    }
}

function validateEmail(email) {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}

function validatePhoneNumber(phoneNumber) {
    const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return PHONE_REGEX.test(phoneNumber)
}



export { validateName, validateEmail, validatePhoneNumber };