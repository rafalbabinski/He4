const offers = [{
    category: 'Actions',
    title: 'Ethereum Classic combined with Zcash',
    company: 'Ethereum foundation',
    boostDescription: 'Altcoins - highest growth',
    totalPrice: 2200,
    currency: 'PLN',     
    status1d: '+0,91%',
    status1m: '+0,91%',
    status3m: '-2,29%',
    status12m: '+0,42%',
    status30m: '+0,85%',
    statusytd: '+1,31%'
}]

function setOffers() {
    const offer = document.querySelector('.offer');

    offers.forEach(item => {
        const offerCopy = offer.cloneNode(true);

        offerCopy.querySelector('.offer__category').innerText = item.category;
        offerCopy.querySelector('.offer__title').innerText = item.title;
        offerCopy.querySelector('.offer__company').innerText = item.company;
        offerCopy.querySelector('.offer__boost').innerText = item.boostDescription;
        offerCopy.querySelector('.offer__total .offer__value').innerText = item.totalPrice;
        offerCopy.querySelector('.offer__currency').innerText = item.currency;
        offerCopy.querySelector('.offer__history--d1 .offer__value').innerText = item.status1d;
        offerCopy.querySelector('.offer__history--m1 .offer__value').innerText = item.status1m;
        offerCopy.querySelector('.offer__history--m3 .offer__value').innerText = item.status3m;
        offerCopy.querySelector('.offer__history--m12 .offer__value').innerText = item.status12m;
        offerCopy.querySelector('.offer__history--m30 .offer__value').innerText = item.status30m;
        offerCopy.querySelector('.offer__history--ytd .offer__value').innerText = item.statusytd;

        document.querySelector('body').appendChild(offerCopy)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setOffers();
})