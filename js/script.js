document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = '/blog.html';
})


// Donation & History button 

const btnDonation = getButtonInfo('btn-donation');
const btnHistory = getButtonInfo('btn-history');
btnDonation.addEventListener('click', function(){
    btnDonation.classList.add('active');
    btnHistory.classList.remove('active');
})
btnHistory.addEventListener('click', function(){
    btnHistory.classList.add('active');
    btnDonation.classList.remove('active');
})