let myLibrary = [];

const addBook = document.querySelector("#new");
addBook.addEventListener('click', ()=> {
	addBookToLibrary()
	newForm.reset()
});



//Constructor

function book(title, author, pages, status) {
	this.title = title
	this.author = author
	this.pages = pages
	this.status = status
}

//Functions

function addBookToLibrary() {
	const form = {
		title : document.forms.newForm.elements.inputTitle.value,
		author : document.forms.newForm.elements.inputAuthor.value,
		pages : document.forms.newForm.elements.inputPages.value,
		status : document.forms.newForm.elements.inputStatus.checked ? 
				'Finished Reading' :
				'Need to Read'
	}

	newBook = new book(form.title, form.author, form.pages, form.status)
	myLibrary.push(newBook)
	render()

	return console.log(myLibrary)
}

function render() {

	const tome = document.createElement('div')
	tome.classList.add('tome')
	tome.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	tome.innerHTML = newBook.title

	shelf.appendChild(tome)

	const remove = document.createElement('button')
	remove.classList.add('remove')
	remove.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	remove.innerHTML = "Remove"

	const status = document.createElement('button')
	status.classList.add('status')
	status.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	status.innerHTML = newBook.status

	tome.appendChild(remove)
	tome.appendChild(status)
	
}

function toggle() {
	
}

function removeBook() {
	console.log('The event listener worked at least')
}







