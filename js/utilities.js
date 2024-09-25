// common functions
function showSectionById(id){
    document.getElementById('donation-card-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    console.log(typeof inputValue);
   // const inputNumber = parseFloat(inputValue);
    return inputValue;
}
 
function getTextFieldValueById(id){
     // console.log("it will get value by id");
     const textValue = document.getElementById(id).innerText;
     const textNumber = parseFloat(textValue);
     return textNumber;
}
 
function getTitle(id){
    const title = document.getElementById(id).innerText;
    return title;
}

function getDonationTime(){
    const now = new Date();
    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();
    return currentDateTime;
}