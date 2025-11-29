const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((btn) => {
    console.log(btn.id);
    btn.addEventListener('click', function (check) {
        body.style.backgroundColor = check.target.id
    })
})