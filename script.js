// create a global pin generator object
const pinGenerateObject = {
    generatePin: "",
    userPin: "",
    message: null,
    count: 0

}


// create a pin when click
document.getElementById("pin-generate").addEventListener("click", function (event) {

    randomPinGenerator(pinGenerateObject);

});

// random pin generator function 
function randomPinGenerator(pinGenerateObj) {
    let generateNumber;
    generateNumber = "" + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9);
    pinGenerateObj.generatePin = generateNumber;
    document.getElementById("pin-generate-input").value = pinGenerateObj.generatePin;
}


// click the button
document.getElementById("button-parent").addEventListener("click", function (event) {

    userInput(event, pinGenerateObject); // when some one type the button
});

// when some one type the button
function userInput(event, pinGenerateObj) {

    if (event.target.innerText == "0") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "2") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "3") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "4") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "1") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "5") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "6") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "7") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "8") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "9") {
        pinGenerateObj.userPin += event.target.innerText;
    }
    else if (event.target.innerText == "C") {
        pinGenerateObj.userPin = "";
    }
    document.getElementById("user-input").value = pinGenerateObj.userPin;


}

// some one submit the match and check
document.getElementById("submit-btn").addEventListener("click", function (event) {
    matchCheck(pinGenerateObject);
});

// match checking function 
function matchCheck(pinGenerateObj) {

    if (pinGenerateObj.userPin == pinGenerateObj.generatePin &&
        pinGenerateObj.generatePin != "" &&
        pinGenerateObj.userPin != ""
    ) {
        pinGenerateObj.message = "<p class='notify'>✅ Pin Matched... Secret door is opening for you</p>";
        document.getElementById("user-input").value = ""; // reset user input
        pinGenerateObj.userPin = ""; // reset user input
        pinGenerateObj.count = 0; // reset counter
        document.getElementById("counter").innerText = "";

    }
    else{
        pinGenerateObj.message = "<p class='notify'>❌ Pin Didn't Match, Please try again</p>" ;
        pinGenerateObj.count+=1;
        document.getElementById("counter").innerText = pinGenerateObj.count+" try left";
    }

    document.getElementById("message").innerHTML = pinGenerateObj.message;
}
