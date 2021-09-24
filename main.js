pwsh_img = document.getElementById("pwsh-img")
arduino_img = document.getElementById("arduino-img")

pwsh_img.addEventListener("mouseover", function () {
    mouseOver(this,"images\\Win.gif")
})
pwsh_img.addEventListener("mouseout", function () {
    mouseOut(this,"images\\Win.jpg")
})

arduino_img.addEventListener("mouseover", function () {
    mouseOver(this,"images\\ttt-sample.gif")
})
arduino_img.addEventListener("mouseout", function () {
    mouseOut(this,"images\\ttt-sample.jpg")
})

function mouseOver(event,gif) {
    event.src = gif
}

function mouseOut(event,jpg) {
    event.src = jpg
}