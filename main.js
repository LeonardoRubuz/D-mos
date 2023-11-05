//console.log(document.getElementsByClassName('bloc-note')[1]);
el = document.getElementById('d');
btn = document.getElementById('b');

btn.addEventListener('click',() => {
    el.showModal();
})