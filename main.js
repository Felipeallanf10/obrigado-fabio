var btn = document.getElementsByClassName('.item .botaoo')
var gostei = document.getElementsByClassName('.gostei')
var box = document.querySelector('.botao')

/*
btn.addEventListener('click', function () {
  if (gostei.style.display === 'none') {
    gostei.style.display = 'flex'
  } else {
    gostei.style.display = 'none'
  }
})
*/

function gostar() {
  box.innerHTML = `
  <img
                class="gostei"
                src="./assets/Logotipo de hamburgueria grunge preto e branco.png"
                alt=""
              />
  `
}
