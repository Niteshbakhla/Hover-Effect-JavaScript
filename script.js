
document.querySelector(".left").addEventListener("mousemove", () => {
    document.querySelector(".float-left").style.left = "40%";
    document.querySelector(".cardOne").style.left = "30%";
    document.querySelector(".cardOne").style.transform = "rotateY(-40deg) translate(-50%, 0)"
})

document.querySelector(".left").addEventListener("mouseleave", () => {
    document.querySelector(".float-left").style.left = "100%"
    document.querySelector(".cardOne").style.left = "50%"
    document.querySelector(".cardOne").style.transform = "rotateY(0deg) translate(-50%, 0)"
})


document.querySelector(".right").addEventListener("mousemove", () => {
    document.querySelector(".float-right").style.right = "40%";
    document.querySelector(".cardOne").style.left = "65%";
    document.querySelector(".cardOne").style.transform = "rotateY(30deg) translate(-50%, 0)"
})

document.querySelector(".right").addEventListener("mouseleave", () => {
    document.querySelector(".float-right").style.right = "100%";
    document.querySelector(".cardOne").style.left = "50%";
    document.querySelector(".cardOne").style.transform = "rotateY(10deg) translate(-50%, 0)"
})
