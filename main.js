function myFunction() {
    document.getElementById("panel").style.display = "block";
}

function myFunctionClose() {
    document.getElementById("panel").style.display = "none";
}

function myFunctionCloseAbout() {
    document.getElementById("panel2").style.display = "none";
}

function myFunctionCloseContact() {
    document.getElementById("panel3").style.display = "none";
}

function myFunctionDashboard() {
    document.getElementById("dashboardModel").style.display = "block";
}

function myFunctionDashboardClose() {
    document.getElementById("dashboardModel").style.display = "none";
}

function myFunctionStart() {
    document.getElementById("start").style.display = "block";
}

function myFunctionQ1() {
    document.getElementById("question1").style.display = "block";
}

function myFunctionQ2() {
    document.getElementById("question2").style.display = "block";
}

function myFunctionQ3() {
    document.getElementById("question3").style.display = "block";
}

function myFunctionQ4() {
    document.getElementById("question4").style.display = "block";
}

function myFunctionQ5() {
    document.getElementById("question5").style.display = "block";
}

function myFunctionQ6() {
    document.getElementById("question6").style.display = "block";
}

function myFunctionQ7() {
    document.getElementById("question7").style.display = "block";
}

function myFunctionQ8() {
    document.getElementById("question8").style.display = "block";
}

function myFunctionQ9() {
    document.getElementById("question9").style.display = "block";
}

function myFunctionQ10() {
    document.getElementById("question10").style.display = "block";
}

function myFunctionFinish() {
    document.getElementById("finish").style.display = "block";
}

function myFunctionLogin() {
    document.getElementById("id01").style.display = "block";
}

function myFunctionLoginClose() {
    document.getElementById("id01").style.display = "none";
    document.loginForm.reset("username");
}

function myFunctionLoginCloseInvite() {
    document.getElementById("id02").style.display = "none";
}

function myFunctionAbout() {
    document.getElementById("panel2").style.display = "block";
}

function myFunctionContact() {
    document.getElementById("panel3").style.display = "block";
}

function myFunctionInvite() {
    document.getElementById("id02").style.display = "block";
}

function myFunctionOnClick1(value) {
    var userInput = value;
    document.getElementById('intelligenceScore').innerHTML = userInput;
}

function myFunctionOnClick2(value) {
    var userInput2 = value;
    document.getElementById('dependabilityScore').innerHTML = userInput2;
}

function myFunctionOnClick3(value) {
    var userInput3 = value;
    document.getElementById('looksScore').innerHTML = userInput3;
}

function myFunctionOnClick4(value) {
    var userInput4 = value;
    document.getElementById('fashionSenseScore').innerHTML = userInput4;
}

function myFunctionOnClick5(value) {
    var userInput5 = value;
    document.getElementById('selfawarenessScore').innerHTML = userInput5;
}

function myFunctionOnClick6(value) {
    var userInput6 = value;
    document.getElementById('humorScore').innerHTML = userInput6;
}

function myFunctionOnClick7(value) {
    var userInput7 = value;
    document.getElementById('streetSmartsScore').innerHTML = userInput7;
}

function myFunctionOnClick8(value) {
    var userInput8 = value;
    document.getElementById('charismaScore').innerHTML = userInput8;
}

function myFunctionOnClick9(value) {
    var userInput9 = value;
    document.getElementById('gritScore').innerHTML = userInput9;
}

function myFunctionOnClick10(value) {
    var userInput10 = value;
    document.getElementById('hygieneScore').innerHTML = userInput10;
}

var users = [
    {
        username: "Shawn",
        password: "tupac"
    },
    {
        username: "Jessica",
        password: "password"
    }
]



function myFunctionGetInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var i = 0
    for(i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
            alert(username + " is logged in!")

            document.getElementById("loggedIn").innerHTML = username;
            

            

           


            return;
        }
    }
    alert("incorrect username or password")
}
