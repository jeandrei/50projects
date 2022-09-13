const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  // toggle active and deactive when click again
  search.classList.toggle('active')
  input.focus()
})
