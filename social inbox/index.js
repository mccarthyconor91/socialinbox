const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const answerFour = document.getElementById("answerFour");
const basic = document.getElementById("basic");
const influencer = document.getElementById("influencer");
const pro = document.getElementById("pro");
const tableButton = document.getElementById("table-btn");
const table = document.querySelector("table");

let isAnswerVisible = false;
let isAnswerVisible2 = false;
let isAnswerVisible3 = false;
let isAnswerVisible4 = false;

let annualToggled = false;
let featuresClicked = false;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))





function questionOne() {
    if (!isAnswerVisible) { 
    answerOne.innerHTML = "If you have a product or service and are an influencer then email marketing is one of your greatest tools to generate revenue.";
    answerOne.classList.toggle('hide');
    document.getElementById('arrow').style.transform = "rotate(90deg)";
    } else {
    answerOne.classList.add('hide');
    arrow.style.transform = "rotate(0)";
    }
    isAnswerVisible = !isAnswerVisible;
}

function questionTwo() {
    if (!isAnswerVisible2) { 
    answerTwo.innerHTML = "We have fully built out sales functionality within our platform. Just upload your digital product and we will do the rest. Your customers will be able to checkout with ease.";
    answerTwo.classList.toggle('hide');
    document.getElementById('arrowTwo').style.transform = "rotate(90deg)";
    } else {
    answerTwo.classList.add('hide');
    arrowTwo.style.transform = "rotate(0)";
    }
    isAnswerVisible2 = !isAnswerVisible2;
}

function questionThree() {
    if (!isAnswerVisible3) { 
    answerThree.innerHTML = "No, if you're just starting out then you can go with our free plan.";
    answerThree.classList.toggle('hide');
    document.getElementById('arrowThree').style.transform = "rotate(90deg)";
    } else {
    answerThree.classList.add('hide');
    arrowThree.style.transform = "rotate(0)";    
    }
    isAnswerVisible3 = !isAnswerVisible3;
}

function questionFour() {
    if (!isAnswerVisible4) {
    answerFour.innerHTML = "Aside from the free plan, you can send an unlimited amount of emails.";
    answerFour.classList.toggle('hide');
    document.getElementById('arrowFour').style.transform = "rotate(90deg)";
    } else {
    answerFour.classList.add('hide');
    arrowFour.style.transform = "rotate(0)";    
    }
    isAnswerVisible4 = !isAnswerVisible4;
}
 
function changePrice() {
    if (!annualToggled) {
    basic.innerHTML = "17"
    influencer.innerHTML = "44"
    pro.innerHTML = "179"
    } else {
    basic.innerHTML = "19"
    influencer.innerHTML = "49"
    pro.innerHTML = "199"    
    }
    annualToggled = !annualToggled;
}

function showTable() {
    table.classList.toggle('hide');
    tableButton.style.borderBottom = "none";
    tableButton.style.borderBottomLeftRadius = "0px";
    tableButton.style.borderBottomRightRadius = "0px";
    tableButton.style.height = "100px";

    if (!featuresClicked) {
    tableButton.innerHTML = "Full Feature Comparison";
    tableButton.style.width = "100%";
    } else {
    tableButton.innerHTML = "View Full Feature Comparison";
    tableButton.style.borderBottom = "#ccc 5px solid";
    tableButton.style.borderBottomLeftRadius = "25px";
    tableButton.style.borderBottomRightRadius = "25px";

    }

    featuresClicked = !featuresClicked;
}
