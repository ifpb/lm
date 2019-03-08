$('.counter').counterUp()

$("#menu-toggle").click(function (e) {
  e.preventDefault()
  
  let sidebar = $(".sidebar")
  let navbar = $(".navbar")
  
  sidebar.toggleClass("only-icons")
  navbar.toggleClass("only-icons")
})

$(".nav-link").click(function (e) {
  e.preventDefault()

  $(".nav-link").removeClass('active')
  $(this).addClass('active')
})