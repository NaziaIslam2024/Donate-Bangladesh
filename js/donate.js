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
        const modal = document.createElement('dialog');
                modal.innerHTML = `
                                <dialog id="my_modal_1" class="modal">
                                <div class="flex justify-center items-center flex-col text-center space-y-4 modal-box">
                                  <h3 class="text-xl font-bold">Congrates!</h3>
                                  <img src="assets/coin.png" alt="">
                                  <p class="py-4">You have donated for humankind</p>
                                  <h3 class="text-lg font-bold">Successfully</h3>
                                  <div class="modal-action">
                                    <form method="dialog">
                                      
                                      <button onclick="my_modal_1.close()" class="btn">Close Confirmation</button>
                                    </form>
                                  </div>
                                </div>
                            </dialog>
                `
                document.getElementById('noaForm').appendChild(modal);
    }
    else{
        alert("Donation failed.")
    }            
})