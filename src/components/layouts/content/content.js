var close_ads_btn = document.querySelector('#content .close_ads_btn i');
var ads_baner = document.querySelector('#content .ads_baner');

close_ads_btn.addEventListener('click', () => {
    ads_baner.classList.add('hidden');
})