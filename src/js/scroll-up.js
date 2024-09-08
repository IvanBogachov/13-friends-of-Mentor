window.addEventListener('scroll', function () {
  var scrollButton = document.querySelector('.top');
  if (window.scrollY > 1000) {
    scrollButton.style.display = 'flex';
  } else {
    scrollButton.style.display = 'none';
  }
});
document.querySelector('.top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});