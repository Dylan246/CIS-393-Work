function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("false");
        return false;
    } else if (password.includes("password")) {
        console.log("false");
        return false;
    } else {
        let count = 0;
        for (let i = 0; i < password.length; i++) {
            let ch = password.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                count++;
            }
        }
        if (count == 1) {
            console.log("true");
            return true;
        }
    }
}

isStrongPassword("Abcpassword123")