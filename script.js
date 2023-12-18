

function takeNote(){
    const a = document.createElement("h1")
    a.innerHTML = "Hello world"
    const parent = document.querySelector("body")
    parent.appendChild(a)
}

function saveNote() {
    var input = document.getElementById("input").value
    var parent = document.getElementById("parent")

    var note = document.createElement("li")
    note.style.fontSize = "4rem"
    note.innerHTML = `${input}`
    note.setAttribute("class", "completed")
    parent.appendChild(note)
    note.onclick = completedNote
    
    function completedNote(){
        note.style.textDecoration = "line-through"

    }
}

