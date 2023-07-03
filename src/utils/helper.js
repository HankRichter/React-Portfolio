export function validateEmail(email){
    let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(String(email).toLowerCase())
}
export function checkBlank(field){
    let regex = /^\s*$/;
    return regex.test(String(field).toLowerCase())
}