const donationTime = getDonationTime(); 
const quotaTitle = getTitle('quota-title');
const noakhaliTitle = getTitle('noakhali-title');
const feniTitle = getTitle('feni-title');

document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(e){
        e.preventDefault();
        const donationAmount = parseFloat(getInputFieldValueById('input-donate-noakhali'));
        const noakhaliBalance = getTextFieldValueById('noakhali-balance');
        const profileBalance = getTextFieldValueById('profile-balance');
        if(donationAmount > 0 && profileBalance >= donationAmount){
            const newNoakhaliBalance = donationAmount + noakhaliBalance;
            const newProfileBalance = profileBalance - donationAmount;
            document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
            document.getElementById('profile-balance').innerText = newProfileBalance;
            
            const div = document.createElement('div');
            div.innerHTML = `<div class="text-left border p-5 mx-48 border-slate-100">
                                <p class="font-semibold">${donationAmount} Taka is ${noakhaliTitle}</p>
                                <p class="text-slate-400">Date: ${donationTime}</p>
                            </div>`;
            document.getElementById('history-container').appendChild(div);
            document.getElementById('input-donate-noakhali').value = '';
            successModal();
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
    const profileBalance = getTextFieldValueById('profile-balance');
    if(donationAmount > 0 && profileBalance >= donationAmount){
        const newFeniBalance = donationAmount + feniBalance;
        const newProfileBalance = profileBalance - donationAmount;
        document.getElementById('feni-balance').innerText = newFeniBalance;
        document.getElementById('profile-balance').innerText = newProfileBalance;
        
        //const donationTime = getDonationTime();
        const div = document.createElement('div');
        div.innerHTML = `<div class="text-left border p-5 mx-48 border-slate-100">
                            <p class="font-semibold">${donationAmount} Taka is ${feniTitle}</p>
                            <p class="text-slate-400">Date: ${donationTime}</p>
                        </div>`;
        document.getElementById('history-container').appendChild(div);
        document.getElementById('input-donate-feni').value = '';
        successModal();
    }
    else{
        alert("Donation failed.")
    }            
})

document.getElementById('btn-donate-quota')
.addEventListener('click', function(e){
    e.preventDefault();
    const donationAmount = parseFloat(getInputFieldValueById('input-donate-quota'));
    const quotaBalance = getTextFieldValueById('quota-balance');
    const profileBalance = getTextFieldValueById('profile-balance');
    if(donationAmount > 0 && profileBalance >= donationAmount){
        const newQuotaBalance = donationAmount + quotaBalance;
        const newProfileBalance = profileBalance - donationAmount;
        document.getElementById('quota-balance').innerText = newQuotaBalance;
        document.getElementById('profile-balance').innerText = newProfileBalance;
        //console.log(donationAmount, newQuotaBalance, newProfileBalance)
        const div = document.createElement('div');
        div.innerHTML = `<div class="text-left border mx-48 p-5 border-slate-100">
                            <p class="font-semibold">${donationAmount} Taka is ${quotaTitle}</p>
                            <p class="text-slate-400">Date: ${donationTime}</p>
                        </div>`;
        document.getElementById('history-container').appendChild(div);
        document.getElementById('input-donate-quota').value = '';
        // document.getElementById('my_modal_1').showModal();
        // document.getElementById('quota-modal-close').addEventListener('click', function(event){
        //     event.preventDefault();
        //     console.log(event);
        //     document.getElementById('my_modal_1').close();
        // })
        successModal();
    }
    else{
        alert("Donation failed.")
    }            
})