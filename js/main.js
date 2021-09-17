const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
});

closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
});

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const selectionHeight = current.offsetHeight
        const seletionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > screenTop && scrollY <= sectionTop +selectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active')

        }
    })
}
    
