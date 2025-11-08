const shareButton = document.querySelector('#share-button');
const shareOptions = document.querySelector('.share-options');

shareButton.onclick = function() {
    shareOptions.classList.toggle('visible');
}