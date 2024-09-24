document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = './blog.html';
})



// Donation & History button 

const btnDonation = getButtonInfo('btn-donation');
const btnHistory = getButtonInfo('btn-history');
btnDonation.addEventListener('click', function () {
    btnDonation.classList.add('active');
    btnHistory.classList.remove('active');
})
btnHistory.addEventListener('click', function () {
    btnHistory.classList.add('active');
    btnDonation.classList.remove('active');
})

// first donate form button function
document.getElementById('btn-donate-1').addEventListener('click', function (event) {
    event.preventDefault();
    const balance = getTextValue('account-balance');
    const firstTitle = document.getElementById('first-donate-title').innerText

    const inputDonateNoakhali = getInputValue('input-donate1');
    document.getElementById('input-donate1').value = ''

    if (isNaN(inputDonateNoakhali) || inputDonateNoakhali > balance || inputDonateNoakhali <= 0) {
        alert('Invalid Number !')
        return;
    }

    const newBalance = balance - inputDonateNoakhali;
    const firstDonateBalance = getTextValue('first-donate-balance');

    const newFirstDonateBalance = inputDonateNoakhali + firstDonateBalance;

    document.getElementById('first-donate-balance').innerText = newFirstDonateBalance;
    document.getElementById('account-balance').innerText = newBalance;
    my_modal_5.showModal();


    const div = document.createElement('div');
    div.classList.add('border', 'rounded-xl', 'py-6', 'px-8', 'space-y-4');
    
    div.innerHTML = `
        <h4 class= "text-xl font-bold">${inputDonateNoakhali} Taka ${firstTitle}</h4>
        <p class="bg-gray-100 py-2 px-2 rounded-md dateTimeDisplay"></p>
    `
    document.getElementById('history-section').appendChild(div);
    
    showDateTime();
    
});

// second donate from button function
document.getElementById('btn-donate-2').addEventListener('click', function (event) {
    event.preventDefault();
    const balance = getTextValue('account-balance');
    const secondTitle = document.getElementById('second-donate-title').innerText

    const inputDonateFeni = getInputValue('input-donate-2');
    document.getElementById('input-donate-2').value = ''

    if (isNaN(inputDonateFeni) || inputDonateFeni > balance || inputDonateFeni <= 0) {
        alert('Invalid Number !')
        return;
    }

    const newBalance = balance - inputDonateFeni;
    const secondDonateBalance = getTextValue('second-donate-balance');

    const newSecondDonateBalance = inputDonateFeni + secondDonateBalance;

    document.getElementById('second-donate-balance').innerText = newSecondDonateBalance;
    document.getElementById('account-balance').innerText = newBalance;
    my_modal_5.showModal();
    

    const div = document.createElement('div');
    div.classList.add('border', 'rounded-xl', 'py-6', 'px-8', 'space-y-4');
    
    div.innerHTML = `
        <h4 class= "text-xl font-bold">${inputDonateFeni} Taka ${secondTitle}</h4>
        <p class="bg-gray-100 py-2 px-2 rounded-md dateTimeDisplay"></p>
    `
    document.getElementById('history-section').appendChild(div);
    
    showDateTime();

});

// third donate from button function
document.getElementById('btn-donate-3').addEventListener('click', function (event) {
    event.preventDefault();
    const balance = getTextValue('account-balance');
    const thirdTitle = document.getElementById('third-donate-title').innerText;  

    const inputDonateQuota = getInputValue('input-donate-3');
    document.getElementById('input-donate-3').value = ''

    if (isNaN(inputDonateQuota) || inputDonateQuota > balance || inputDonateQuota <= 0) {
        alert('Invalid Number !')
        return;
    }

    const newBalance = balance - inputDonateQuota;
    const thirdDonateBalance = getTextValue('third-donate-balance');

    const newThirdDonateBalance = inputDonateQuota + thirdDonateBalance;

    document.getElementById('third-donate-balance').innerText = newThirdDonateBalance;
    document.getElementById('account-balance').innerText = newBalance;
    my_modal_5.showModal();
    

    const div = document.createElement('div');
    div.classList.add('border', 'rounded-xl', 'py-6', 'px-8', 'space-y-4');
    
    div.innerHTML = `
        <h4 class= "text-xl font-bold">${inputDonateQuota} Taka ${thirdTitle}</h4>
        <p class="bg-gray-100 py-2 px-2 rounded-md dateTimeDisplay"></p>
    `
    document.getElementById('history-section').appendChild(div);
    
    showDateTime();

});

// section hide and show on click
document.getElementById('btn-history').addEventListener('click', function () {
    showSectionById('history-section');
})
document.getElementById('btn-donation').addEventListener('click', function () {
    showSectionById('donation-section');
});

