document.addEventListener("DOMContentLoaded", () => {
    main()
})

function main(){
fetchDogNames()
// createSpanListener()
}

function fetchDogNames(){
    fetch(" http://localhost:3000/pups")
    .then(resp => resp.json())
    .then(dogs=> dogs.forEach(function(dog){
        renderDog(dog)
    }))
}

function renderDog(dog){
    const div = document.querySelector("#dog-bar")
    const span = document.createElement("span")
    span.dataset.id = dog.id
    span.className = "dog-name"

    span.innerHTML = dog.name
    div.append(span)

    span.addEventListener('click', function(event){
        event.preventDefault
        const div = document.querySelector("#dog-info")
        renderDogId(event)
    })
}


function renderDogId(event){
  fetchDog(event.target.dataset.id)

}

function fetchDog(id){
    // console.log(id)
    const baseURL = "http://localhost:3000/pups"
    fetch(`${baseURL}/${id}`)
    .then(resp => resp.json())
    .then(dog => renderDogImage(dog))
    // .then(dogs => dogs.forEach(function(dog){
    //    renderDogImage(dog)
    // }))

}

function renderDogImage(dog){
    const div = document.querySelector("#dog-info")
    const img = document.createElement("img")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")

    div.innerHTML = ""
    h2.innerHTML = dog.name
    button.innerHTML = ""
    img.src = dog.image
    button.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

    div.append(h2, img, button)
}



// main()


// listen for user's click on span
// show dog img - image,
// h2-  name and
// button- isGoodDog status

