const div = document.querySelector('#cat');

if (document.documentElement.clientWidth < 700) {
    div.innerHTML = `<img src="img/mobile-logo.png">`;
}
