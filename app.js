const titleContainer = document.querySelector(".title-container")
const learn_more = document.querySelector(".learn-more")

window.addEventListener("load", ()=> {
    titleContainer.classList.add("title-container-show")
    titleContainer.classList.remove("title-container")

    learn_more.classList.add("learn-more-show")
    learn_more.classList.remove("learn-more")
})


// react js start
const reactjs = document.querySelector(".react-js")

window.addEventListener("scroll", ()=> {
    reactjs.classList.add("react-js-show")
    reactjs.classList.remove("react-js")
})

// react js web app  start
const web = document.querySelector(".web-app")
const header = document.querySelector(".header")

window.addEventListener("scroll", ()=> {
    web.classList.add("web-app-show")
    web.classList.remove("web-app")
})
// mini web site
function mouseenter() {
    header.classList.add("header-show")     
    header.classList.remove("header")
}
web.addEventListener("mousemove", mouseenter)

function mouseout() {
    header.classList.remove("header-show")
    header.classList.add("header")
}
web.addEventListener("mouseout", mouseout)


const btn = document.querySelector(".btn") 

const main_left = document.querySelector(".main-left")

const button = document.querySelector(".button")

const main_right = document.querySelector(".main-right")
btn.addEventListener("click", ()=> {
    main_left.classList.add("main-left-go")
    main_right.classList.add("main-right-go")
    main_right.classList.remove("main-right")

})

button.addEventListener("click", ()=> {
    main_left.classList.remove("main-left-go")
    main_right.classList.remove("main-right-go")
    main_right.classList.add("main-right")
})