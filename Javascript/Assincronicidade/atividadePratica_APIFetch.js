const API_URL = 'https://thatcopy.pw/catapi/rest/';

const button = document.getElementById('cat-button');
const catImg = document.getElementById('cat-img');
const catContainer = document.getElementById('cat-background');

(function inicializa() {
    button.addEventListener("click",() => generateCat());
    generateCat();
})()

async function generateCat() {
    let catImage = await getNewCat();
    catImg.src =  catImage;
    catContainer.style.backgroundImage = `url(${catImage})`;
}

async function getNewCat() {
    try {
        const res = await fetch(API_URL);
        const json = await res.json();
        return json.webpurl;
    } catch (e) {
        console.log(e);
    }
}


