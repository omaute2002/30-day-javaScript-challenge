
function changeText(){
    const title = document.getElementById("website-title");
    title.innerHTML = "Day 9 of Challenge"
}

const newDiv =  document.createElement('div')
newDiv.textContent = "This is dynamically created div using JS"
newDiv.className = "task-2"
newDiv.style.color="green"
const container = document.getElementById('container')
container.appendChild(newDiv)

const newListElement = document.createElement('li')
newListElement.textContent = "3.Mahesh"
newListElement.style.color = "red"
const list = document.getElementById('unordered-list')
list.appendChild(newListElement)


// REmove Element 
const elementToRemove = document.getElementById("first-name")
elementToRemove.remove()

//REmoving the last child
const listElement = document.getElementById('unordered-list')
if(listElement.lastChild){
    listElement.remove(listElement.lastChild)

}

function changeLink(){
    const linkOfWebsite = document.getElementById('website-link')
    linkOfWebsite.setAttribute("href", "https://mail.google.com/mail/u/0/#inbox");
    linkOfWebsite.innerText = "Gmail"
}

function changeCSSProps(){
    const h2title = document.getElementById("secondaryTitle")
    h2title.classList.remove("h2-title1")
    h2title.classList.add("h2-title2");
}
