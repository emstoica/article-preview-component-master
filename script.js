const shareButton = document.querySelector('.author-info button');

shareButton.addEventListener('click', () => {
  document.querySelector('.share-options').classList.toggle('visible');
});