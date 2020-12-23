const navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
const navbarToggler1 = document.getElementsByClassName('navbar-toggler')[1];
const navlinksDiv = document.getElementsByClassName('navlinks-div')[0];

const activeToggler = () => {
    navlinksDiv.classList.toggle('active');
}

navbarToggler.addEventListener('click', activeToggler)

navbarToggler1.addEventListener('click', activeToggler)