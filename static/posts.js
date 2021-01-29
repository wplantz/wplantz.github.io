//File:posts.js
//Author: Carlos Sotello
//Purpose: Fills blog page with posts
console.log("Script loaded")
post = { // example post until db is made
    title:"Example title",
    text:"Post text",
    author:"Whitney Plantz",
    timestamp:"1/29/21"
}
console.log("Example post:" + post)
posts = [post] // represents list of posts to be made later
let container = document.getElementById("container")

while(container.firstChild)//Remove any prior blog posts 
    container.remove(container.firstChild)

posts.array.forEach(post => { // create and append each post
    let title = document.createElement("h2")
    let text = document.createElement("p")
    let details = document.createElement("h5")
    let br = document.createElement("br")

    title.innerHTML = post.title
    text.innerHTML = post.text
    details.innerHTML = "Post by " + post.author + ", at " + post.timestamp

    container.appendChild(title)
    container.appendChild(details)
    container.appendChild(text)
    container.appendChild(br)
    container.appendChild(br)

});


