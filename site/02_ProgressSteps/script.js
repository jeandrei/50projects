const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  /* limits the next to the max length of the array */
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  // update DOM
  update()
})

prev.addEventListener('click', () => {
  currentActive--

  /* limits the prev to the 1 index of the array */
  if (currentActive < 1) {
    currentActive = 1
  }
  // update DOM
  update()
})

// Update class of cicles when click next and prev
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // Get all active circles
  const actives = document.querySelectorAll('.active')

  // Handle the progress bar
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // Handle the prev active button
  // if currrentActive is = 1 it is the first step
  if (currentActive === 1) {
    prev.disabled = true
    // if currentActive is = to circle.lenght it is the last step
    // then disable the next button
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
