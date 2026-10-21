console.log(document)

const card = document.getElementById("card")
const image1 = document.getElementById("image1")
const Button1 = document.getElementById("btn1")
const Button2 = document.getElementById("btn2")
const input1 = document.getElementById("input1")
const year = document.getElementById("year")
const form = document.getElementById("form")
const indicator = document.getElementById("indicator")
const display = document.getElementById("display")

Button1.addEventListener(
    "click", function () {
        indicator.innerHTML = "You Clicked the button"
        second.innerHTML = "Yohoo dito ang tingin"
    }

)

Button2.addEventListener(
    "dbclick", function () {
        indicator.innerHTML = "Luh pinindot"
        card.style.background = "lightblue"
    }

)

image1.addEventListener(
    "mouseover", function () {
        indicator.innerHTML = "You Clicked the image"
        image1.style.transform = "scale(1.1)"
    }

)

image1.addEventListener(
    "mouseout", function () {
        indicator.innerHTML = "You Exited the image"
        image1.style.transform = "scale(1)"
    }

)

input1.addEventListener(
    "input", function () {
        display.innerHTML = "hallo" + input1.value
    }
)

input1.addEventListener(
    "focus", function () {
        indicator.innerHTML = "You are typing..."
        input1.style.backgroundColor = "lightyellow"
    }
)

input1.addEventListener(
    "blur", function () {
        input1.style.backgroundColor = "white"
    }
)

form.addEventListener(
    "mouseleave", function () {
        indicator.innerHTML = "You leave the form"
        form.style.backgroundColor = "rose"
    }
)

form.addEventListener(
    "mouseenter", function () {
        indicator.innerHTML = "wilkam bak jisun titum"
        form.style.backgroundColor = "cyan"
    }
)