const container = document.querySelector('.container')
const inputs = Array.from(document.querySelectorAll('input'))

for (const input of inputs) {
  input.addEventListener('change', function(event) {
    const directionValue = this.value
    container.classList = `container ${directionValue}`
  })
}