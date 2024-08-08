let navbar=document.querySelector('.menu')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
};

const searchbtn = document.getElementById('search-btn')
const searchform=document.querySelector('.search-form')

// document.querySelector('#search-box').onclick = () =>{
//     searchbar.classList.toggle('active');
// }
searchbtn.addEventListener('click', () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}