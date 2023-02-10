$(document).ready(function () { 
    $(".navbar-burger").click(function () { 
        $(".navbar-burger").toggleClass("is-active"); 
        $(".navbar-menu").toggleClass("is-active"); 
    })
})

const options = {
    bottom: '60px', // default: '32px'
    right: '20px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

function displaySkillInfo(id) {
    x = document.querySelector('.descrioeuvre')
    y = document.querySelector('.desc'.concat('',id))
    x.classList.toggle('active');
    y.classList.toggle('active');
  }

function noDisplaySkillInfo(id) {
  x = document.querySelector('.descrioeuvre')
  y = document.querySelector('.desc'.concat('',id))
  x.classList.toggle('active');
  y.classList.toggle('active');
}


const projects = []

// Sorting projects
let element = document.querySelector('.triProject');
if (element) {
    // do stuff because now it's not null
    element.addEventListener('change',(p,o,n) => {
        console.log(p.target.value);
        let value = p.target.value;
        let cardsCategory = document.querySelectorAll('.projectsA')
        localStorage.setItem('category',value);
        cardsCategory.forEach((e,i)=> {
            e.parentElement.style.display="none";
            if (value=='All') {
                e.parentElement.style.display="block";
            }
            else if (value==e.getAttribute('data-category')) {
                e.parentElement.style.display="block";
            }
        })
    })
    let category = localStorage.getItem('category') ? localStorage.getItem('category') : 'All';
    let desOptions = document.querySelectorAll('.triProject option');
    desOptions.forEach((e,i)=> {
        e.removeAttribute('selected');
        if (category==e.getAttribute('value')) {
            e.setAttribute('selected','selected')
        }
    })
}