function gras() {
    if (par.style.fontWeight === "bold")
        par.style.fontWeight = "normal"
    else
        par.style.fontWeight = "bold"

    /*if (b.style.backgroundColor === "grey")
        b.style.backgroundColor = ""
    else
        b.style.backrgoundColor = "grey"*/
    console.log(b.style.backgroundColor )
}

function italique() {
    if (par.style.fontStyle === "italic")
        par.style.fontStyle = "normal"
    else
        par.style.fontStyle = "italic"
}

function underlined() {
    if (par.style.textDecoration === "underline")
        par.style.textDecoration = ""
    else
        par.style.textDecoration = "underline"

}

function familyChange() {
    document.querySelector('#par').style.fontFamily = document.querySelector('#family').value
}

function sizeChange() {
    document.querySelector('#par').style.fontSize = document.querySelector('#size').value + "px"
}