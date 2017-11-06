function password(pass) {
    const correctPassword = pass;
    let loginTries = 3;

    let tryLogin = function (passwordTry) {
        if (md5(passwordTry) !== correctPassword) {
            loginTries--;
            return false;
        }
        return true;
    }

    return tryLogin;
}
