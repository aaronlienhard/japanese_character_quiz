var questionAmount = 10;

const Ten_Questions_Button = document.querySelector('#Ten_Questions_Button');
const Fifteen_Questions_Button = document.querySelector('#Fifteen_Questions_Button');
const Twenty_Questions_Button = document.querySelector('#Twenty_Questions_Button');

Ten_Questions_Button.onclick = function() {
    questionAmount = 10;
    alert("Question amount is " + questionAmount);
}

Fifteen_Questions_Button.onclick = function() {
    questionAmount = 15;
    alert("Question amount is " + questionAmount);
}

Twenty_Questions_Button.onclick = function() {
    questionAmount = 20;
    alert("Question amount is " + questionAmount);
}