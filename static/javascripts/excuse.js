let paragraph = document.getElementById("new-excuse")
let category = document.getElementById("category")

let specificParagraph = document.getElementById("new-specific-excuse")

async function randomExcuse(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        category.innerHTML = "Category: "
        category.innerHTML += data[0].category

        paragraph.innerHTML = "Excuse: "
        paragraph.innerHTML += data[0].excuse
        
        
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}

$(".random-excuse").click(function(){
    randomExcuse("https://excuser.herokuapp.com/v1/excuse")
})

$(".specific-excuse").click(function(){
    
})

// code for generating specific excuse goes down here
$(".choose-college").click(function(){
    specificExcuse("https://excuser.herokuapp.com/v1/excuse/college")
})

$(".choose-office").click(function(){
    specificExcuse("https://excuser.herokuapp.com/v1/excuse/office")
})

$(".choose-party").click(function(){
    specificExcuse("https://excuser.herokuapp.com/v1/excuse/party")
})

$(".choose-children").click(function(){
    specificExcuse("https://excuser.herokuapp.com/v1/excuse/children")
})

$(".choose-family").click(function(){
    specificExcuse("https://excuser.herokuapp.com/v1/excuse/family")
})

async function specificExcuse(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        specificParagraph.innerHTML = data[0].excuse
        
        
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}
