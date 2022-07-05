
const btn = document.getElementById('menu-btn');
const btnMenu = document.getElementById('menu');

btn.addEventListener("click",() => {
    btn.classList.toggle('open');
    btnMenu.classList.toggle('flex')
    btnMenu.classList.toggle('hidden')
})