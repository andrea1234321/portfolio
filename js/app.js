const hamburgerIconEl= document.querySelector('.hamburger-icon')
const linksEl= document.querySelector('.hamburger-menu-links')
const nameHeaderEl= document.querySelector('.name-header')
hamburgerIconEl.addEventListener('click', displayLinks)


function displayLinks(){
  if (linksEl.style.display === "block") {
    linksEl.style.display = "none"
    nameHeaderEl.style.display= "inherit"
  } else {
    linksEl.style.display = "block"
    nameHeaderEl.style.display= "none"
  }
}