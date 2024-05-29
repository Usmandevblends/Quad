const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});
