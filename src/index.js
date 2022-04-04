// write your code here
let ramenMenu = document.querySelector('#ramen-menu')

fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(ramens => ramens.forEach(ramen => {
    renderImage(ramen)
}))

function renderImage(ramen) {
    let img = document.createElement('img')
    img.src = ramen.image
    ramenMenu.append(img)
    img.addEventListener('click', function (e) {
        renderDetails(ramen)
        console.log(e)
    })
}

function renderDetails(ramen) {
    let imgDetails = document.querySelector('.detail-image')
    let ramenName = document.querySelector('.name')
    let restaurant = document.querySelector('.restaurant')

    restaurant.textContent = ramen.restaurant
    ramenName.textContent = ramen.name
    imgDetails.src = ramen.image
}

function createNewRamen() {
    let form = document.querySelector('#new-ramen')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        let newRamen = {}
        newRamen.name = e.target.name.value
        newRamen.restaurant = e.target.restaurant.value
        newRamen.image = e.target.image.value
        newRamen.rating = e.target.rating.value
        newRamen.comment = e.target.querySelector('#new-comment').value

        renderImage(newRamen)

        
        console.log(newRamen)
    })
    
}

createNewRamen()