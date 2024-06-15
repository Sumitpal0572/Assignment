
function getUserData(id, callback) {
    // delay of 2 seconds using setTimeout
    setTimeout(() => {
        // user object
        const user = {
            id: id,
            name: "Abhi",
            rollno: "23",
            email: "abhi@gmail.com"
        };

        // calling callback function with user object as parameter
        callback(user);
    }, 2000);
}

//For displaying user details
function displayUser(user) {
    console.log("User Id:", user.id);
    console.log("Name:", user.name);
    console.log("rollno:", user.rollno);
    console.log("Email:", user.email);

}

getUserData(1, displayUser);