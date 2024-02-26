const title = document.querySelector('.title')
const clod1 = document.querySelector('.clod1')
const clod2 = document.querySelector('.clod2')
const stor = document.querySelector('.stor')
const silwhoett = document.querySelector('.silwhoett')
const monten = document.querySelector('.monten')



document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    clod1.style.marginLeft = -value + 'px'
    clod2.style.marginRight = -value + 'px'

    stor.style.marginBottom = -value + 'px'

    silwhoett.style.marginBottom = -value * 1.1 + 'px'
    monten.style.marginBottom = -value * 1.2 + 'px'
})