// setting variable
let percentageText = document.querySelector("#percentage");

// listen for click event
document.querySelector("svg").addEventListener("click", function () {
    let currentPercentage = parseInt(percentageText.textContent, 10);
    let newPercentage = (currentPercentage < 75) ? currentPercentage + 25 : 75;
    percentageText.textContent = newPercentage + '%';

    //update on click
    document.querySelector("#bar").style.width = newPercentage + '%';
});
