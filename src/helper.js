/**
*
* Source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
*
* Too complex task to do it, also depends on business requirements
*/
export function validatePhoneNumber(phone) {
    return !!phone;
}
