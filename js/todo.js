const texto = document.querySelector('.texto');



texto.addEventListener('click', function(){
    const ol = document.querySelector('ol')
    let li = document.createElement('LI')
    li.innerHTML = texto.value;
    ol.appendChild(li)
});