//your JS code here. If required.
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")
const btn = document.getElementById("submit")
const tBody = document.getElementById("tBody")

btn.addEventListener("click", adding)

function adding(e){
    const thisTitle = title.value;
    const thisAuthor = author.value;
    const thisIsbn = isbn.value;

    const row = document.createElement("tr")
    row.innerHTML = `
    <td>${thisTitle}</td>
    <td>${thisAuthor}</td>
    <td>${thisIsbn}</td>
    <td><button class="delete">Clear</button></td>
    `;
	tBody.append(row)
    title.value = "";
    author.value = "";
    isbn.value = "";

}

tBody.addEventListener("click",remove)

function remove(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
}