document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = '../src/blog.html';
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

    const inputDonateNoakhali = getInputValue('input-donate-1');
    document.getElementById('input-donate-1').value = ''

    if (isNaN(inputDonateNoakhali) || inputDonateNoakhali > balance || inputDonateNoakhali <= 0) {
        alert('Invalid Number !')
        return;
    }

    const newBalance = balance - inputDonateNoakhali;
    const firstDonateBalance = getTextValue('first-donate-balance');

    const newFirstDonateBalance = inputDonateNoakhali + firstDonateBalance;

    document.getElementById('first-donate-balance').innerText = newFirstDonateBalance;
    document.getElementById('account-balance').innerText = newBalance;
    my_modal_5.showModal()
});