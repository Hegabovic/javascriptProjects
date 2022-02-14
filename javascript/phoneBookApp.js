function openPhoneBookApp() {
    close();
}

var myServices = ["add", "search"];
var isDone;

//add
var contactName = prompt("please enter Contact Name").toLowerCase().toString();
var contactNumber = prompt("please enter Contact Number").toLowerCase().toString();


var contactArray = {};

alert("contact name: " + contactName + " , " + " phone Number: " + contactNumber);
isDone = confirm("Are you Done?");


// search

var methodTosearch = prompt("Search using: 1) Phone Number   2)Contact Name \n choose 1 or 2");

if (methodTosearch === "1") {
    var userSearchByNumber = prompt("please enter phone number");


} else {
    var userSearchByName = prompt("please enter Contact Name");

}









