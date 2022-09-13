const labels = document.querySelectorAll('.form-control label')

// WAVE
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})

// NO WAVE
/* labels.forEach((label) => {
  label.innerHTML = `<span style="transition-delay 50ms">${label.outerHTML}</span>`
}) */
