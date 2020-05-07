let inputUserName, inputPassword;
const USER_NAME = 'User';
const USER_PASSWORD = 'SuperUser';
const CURRENT_HOURS = new Date().getHours();

function loginInfo() {
    inputUserName = prompt('Enter your login', 'Your login');
    if (USER_NAME === inputUserName) {
        pass();
    } else if (inputUserName === '' || inputUserName === null) {
        alert('Canceled');
    } else if (inputUserName.length < USER_NAME.length) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else if (inputUserName.length > USER_NAME.length) {
        alert('I don\'t know you');
    } else {
        alert('Something went wrong, please reload the page and input new data');
    }
}

function pass() {
    inputPassword = prompt('Enter your password', 'Your password');
    if (USER_PASSWORD.length === inputPassword.length) {
        CURRENT_HOURS < 20 ? alert('Good day') : alert('Good evening');
    } else if (inputUserName === '' || inputUserName === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
}

loginInfo();