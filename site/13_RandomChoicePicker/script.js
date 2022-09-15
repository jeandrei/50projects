const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

function createTags(input) {
  /* filtra se a tag não for vazia tag => tag.trim() !== ''
    retorna a tag.trim que remove o espaço em branco*/
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  /* vai ser 10 * 100 = 1000 milisegundos ou seja 1 por segundo  */
  const times = 10

  /* stInterval executa um bloco a cada intervalo de tempo */
  /* 1 - fica fazendo esse bloco sem parar*/
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    if (randomTag !== undefined) {
      highlightTag(randomTag)

      setTimeout(() => {
        unHighlightTag(randomTag)
      }, 100)
    }
  }, 100)

  /* 2 - enquanto não da o tempo desse bloco 
  quando da o tempo ele para de executar o bloco anterior com 
  o clearInterval(interval) pega uma randomTag e 
  highlight ela*/
  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    }, 100)
    /* 10 * 100 = 1000 milisegundos ou seja um segundo */
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
