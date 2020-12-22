const navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
const navlinksDiv = document.getElementsByClassName('navlinks-div')[0];

navbarToggler.addEventListener('click', () => {
    navlinksDiv.classList.toggle('active');
})