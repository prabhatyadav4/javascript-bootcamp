// document.getElementById('owl').onclick = function() {
//     alert('Owl clicked')
// }

// Event Bubbling
document.getElementById('images').addEventListener("click", function() {
    console.log("Clicked inside ul")
}, false)       // default -> false

// Event Capturing
document.getElementById('owl').addEventListener("click", function() {
    console.log("Owl clicked")
}, true)

// Stop Propagation
document.getElementById('owl').addEventListener("click", function(e) {
    console.log("Owl clicked")
    e.stopPropagation()
}, true)

document.getElementById('google').addEventListener("click", function(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log("Prevent Google")
})

document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.parentNode)
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    // removeIt.parentNode.removeChild(removeIt)
}, false)