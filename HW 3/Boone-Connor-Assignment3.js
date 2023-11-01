isStrongPassword("qwerty1"); // false - Too short
isStrongPassword("qwertypassword1") // false - Contains "password"
isStrongPassword("qwertyABC") // false - No uppercase numbers
isStrongPassword("qwerty123") // true
function isStrongPassword(password){
    console.log("Testing: " + password)

    if (password.length <= 8){
        console.log("FAILED: Length must be more than 8 ")
        return
    }

    if (password.includes("password")){
        console.log("FAILED: Cant have password")
        return
    }

    if (password.match(/[0-9]/g) == null){
        console.log("FAILED: Must have a number")
        return
    }



    console.log("Password is valid")

}
