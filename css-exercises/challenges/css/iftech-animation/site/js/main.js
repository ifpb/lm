const navTop = document.querySelector('.nav-top')

navTop.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  })
})

document.addEventListener('scroll', () => {
  // if (window.scrollY > window.innerHeight) {
  if (window.scrollY > 50) {
    navTop.className = 'nav-top'
  } else {
    navTop.className = 'nav-top hidden'
  }
})