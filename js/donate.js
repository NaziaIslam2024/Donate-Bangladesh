const profileBalance = getTextFieldValueById('profile-balance');
const noakhaliTitle = getTitle('noakhali-title');
const feniTitle = getTitle('feni-title');
const donationTime = getDonationTime(); 

document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(e){
        e.preventDefault();
        const donationAmount = getInputFieldValueById('input-donate-noakhali');
        const noakhaliBalance = getTextFieldValueById('noakhali-balance');
        if(donationAmount > 0 && profileBalance >= donationAmount){
            const newNoakhaliBalance = donationAmount + noakhaliBalance;
            const newProfileBalance = profileBalance - donationAmount;
            document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
            document.getElementById('profile-balance').innerText = newProfileBalance;
            
            const div = document.createElement('div');
            div.innerHTML = `<div class="text-center border mx-48 border-slate-100">
                                <p>${donationAmount} Taka is ${noakhaliTitle}</p>
                                <p>Date: ${donationTime}</p>
                            </div>`;
            document.getElementById('history-container').appendChild(div);
        }
        else{
            alert("Donation failed.")
        }            
    })

document.getElementById('btn-donate-feni')
.addEventListener('click', function(e){
    e.preventDefault();
    const donationAmount = getInputFieldValueById('input-donate-feni');
    const feniBalance = getTextFieldValueById('feni-balance');
    if(donationAmount > 0 && profileBalance >= donationAmount){
        const newFeniBalance = donationAmount + feniBalance;
        const newProfileBalance = profileBalance - donationAmount;
        document.getElementById('feni-balance').innerText = newFeniBalance;
        document.getElementById('profile-balance').innerText = newProfileBalance;
        
        //const donationTime = getDonationTime();
        const div = document.createElement('div');
        div.innerHTML = `<div class="text-center border mx-48 border-slate-100">
                            <p>${donationAmount} Taka is ${feniTitle}</p>
                            <p>Date: ${donationTime}</p>
                        </div>`;
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert("Donation failed.")
    }            
})

document.getElementById('btn-donate-quota')
.addEventListener('click', function(e){
    e.preventDefault();
    const donationAmount = getInputFieldValueById('input-donate-feni');
    const fquotaBalance = getTextFieldValueById('quota-balance');
    if(donationAmount > 0 && profileBalance >= donationAmount){
        const newQuotaBalance = donationAmount + feniBalance;
        const newProfileBalance = profileBalance - donationAmount;
        document.getElementById('feni-balance').innerText = newFeniBalance;
        document.getElementById('profile-balance').innerText = newProfileBalance;
        
        //const donationTime = getDonationTime();
        const div = document.createElement('div');
        div.innerHTML = `<div class="text-center border mx-48 border-slate-100">
                            <p>${donationAmount} Taka is ${feniTitle}</p>
                            <p>Date: ${donationTime}</p>
                        </div>`;
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert("Donation failed.")
    }            
})