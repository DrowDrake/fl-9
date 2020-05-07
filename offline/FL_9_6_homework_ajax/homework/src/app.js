const getButton = document.querySelector(`input[type='button']`);
const getMainWrapper = document.getElementById('main');
const getDotsLoader = document.getElementById('dotsLoader');
const getBody = document.querySelector('body');
const getWater = document.getElementById('water');
const getLand = document.getElementById('land');

const getHttp = {
    get: function (someUrl) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', someUrl);
            xhr.onload = () => xhr.status === 200
                ? resolve(JSON.parse(xhr.responseText))
                : reject(console.log(xhr.status));
            xhr.send();
        });
    }
};

getButton.addEventListener('click', showLocation);

function showLocation() {
    let latitude = document.querySelector('input[name=latitude]').value;
    let longitude = document.querySelector('input[name=longitude]').value;
    let link = `https://api.onwater.io/api/v1/results/${latitude},${longitude}`;
    let result = getHttp.get(link);
    getMainWrapper.style.display = 'none';
    getDotsLoader.style.display = 'block';
    getBody.style.height = '939px';
    result.then((value) => {
        if (value.water) {
            getDotsLoader.style.display = 'none';
            getWater.style.display = 'block';
        } else {
            getDotsLoader.style.display = 'none';
            getLand.style.display = 'block';
        }
    }).catch(() => {
            console.log('oops...');
        });
}
