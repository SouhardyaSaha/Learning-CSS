var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var planButtons = document.querySelectorAll('.plan button')
var modalNegativeButton = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button')
// var mainNav = document.querySelector('.main-nav')
var mobileNav = document.querySelector('.mobile-nav')

for (var i = 0; i < planButtons.length; i++) {
    const element = planButtons[i];
    element.addEventListener('click', () => {
        // backdrop.style.display = 'block'
        // modal.style.display = 'block'
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
}

backdrop.addEventListener('click', function () {
    closeModal()
    closeSideNav()
})

if (modalNegativeButton) {

    modalNegativeButton.addEventListener('click', closeModal)
}

function closeModal() {
    backdrop.classList.remove('open')
    if (modal) {
        modal.classList.remove('open')
    }
}

toggleButton.addEventListener('click', openSideNav)

function openSideNav() {
    // mainNav.style.display = 'none'
    backdrop.classList.add('open')
    mobileNav.classList.add('open')
}

function closeSideNav() {
    mobileNav.classList.remove('open')
}