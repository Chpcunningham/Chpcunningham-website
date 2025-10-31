let linkedin = document.getElementById("linkedin");
let github = document.getElementById("github");
let instagram = document.getElementById("instagram");
let resume = document.getElementById("resume");


linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/chpcunningham", "_blank");
});

github.addEventListener("click", function(){
    window.open("https://github.com/Chpcunningham", "_blank");
});

instagram.addEventListener("click", function(){
    window.open("", "_blank");
})
resume.addEventListener("click", function() {
    window.open("Files/ConnorCunninghamCV.pdf", ":_blank");
})

document.querySelectorAll()