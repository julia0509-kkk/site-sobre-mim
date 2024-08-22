const chk = document.querySelector('#chk')

const hidden = document.querySelectorAll('.hidden')

//Fazendo a mudança para o modo noturno
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

//Fazendo o scrool de tela
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

hidden.forEach((element) => myObserver.observe(element))

//Fazendo o slide de botão
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')

const contents = document.querySelector('.content')

const images = [
    { 'id': '1', 'url': './img/comp.jpg' },
    { 'id': '2', 'url': './img/image-2.jpg' },
    { 'id': '3', 'url': './img/image-3.jpg' }
]
const loadImages = (images, contents) => {
    images.forEach(image => {
        contents.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>
        `
    })
}
loadImages(images, contents)

let items = document.querySelectorAll('.item')

previous.addEventListener('click', () => {
    const lastItem = items[items.length - 1]
    contents.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
})

next.addEventListener('click', () => {
    contents.appendChild(items[0])
    items = document.querySelectorAll('.item')
})

//Card slide
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Breakpoints responsiveis
    breakpoint: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});

