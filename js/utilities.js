// common functions
function showSectionById(id){
    document.getElementById('donation-card-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    if(isNaN(inputValue) || inputValue === "" || inputValue < 0){
        alert("Enter positive num for donation amount.")
        console.log("its string")
    }
    else{
        const inputNumber = parseFloat(inputValue);
        console.log(typeof inputNumber);
        return inputNumber;
        }
    }
    
    
 
function getTextFieldValueById(id){
     const textValue = document.getElementById(id).innerText;
     const textNumber = parseFloat(textValue);
     console.log(typeof textNumber);
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