let firstMenu = document.querySelector('.first-menu')
let menu = document.querySelector('.menu')
firstMenu.onclick = function(){
    menu.classList.toggle('active')
}

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

