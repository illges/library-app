let myLibrary = [];

//Constructors

function book(title, author, pages, status) {
	this.title = title
	this.author = author
	this.pages = pages
	this.status = status
}

//Functions

function addBookToLibrary() {
	const form = {
		title : document.getElementById('input-title').value,
		author : document.getElementById('input-author').value,
		pages : document.getElementById('input-pages').value,
		status : document.getElementById('input-status').checked ? 
				'Finished Reading' :
				'Need to Read'
	}

	if(form.title.length > 0 && form.author.length > 0 && form.pages.length > 0) {
		newBook = new book(form.title, form.author, form.pages, form.status)
		myLibrary.push(newBook)
		render()
	} else {
		alert('Please Fill out the form correctly')
	}

	return console.log(myLibrary)

}

function render() {

	const tome = document.createElement('div')
	tome.classList.add('row')
	tome.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	tome.innerHTML = newBook.title

	const remove = document.createElement('button')
	remove.classList.add('delete-book')
	remove.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	remove.innerHTML = "Delete"

	const status = document.createElement('button')
	status.classList.add('update-status')
	status.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	status.innerHTML = newBook.status

	tome.appendChild(remove)
	tome.appendChild(status)
	shelf.appendChild(tome)

	document.querySelectorAll('.delete-book').forEach(i => {
    	i.addEventListener('click', (e) => deleteBook(e))
    })

    document.querySelectorAll('.update-status').forEach(i => {
    	i.addEventListener('click', e => toggle(e))
    })
	
}

function toggle(e) {
	const toggle = document.querySelector(`button.update-status[data-index="${e.target.dataset.index}"]`)
	if (myLibrary[e.target.dataset.index].status === 'Need to Read') {

		toggle.innerHTML = 'Finished Reading'
		myLibrary[e.target.dataset.index].status = 'Finished Reading'

	} else {

		toggle.innerHTML = 'Need to Read'
		myLibrary[e.target.dataset.index].status = 'Need to Read'

	}
	// console.log(document.querySelector(`button.update-status[data-index="${e.target.dataset.index}"]`))
	// console.log(myLibrary[e.target.dataset.index])
}

function deleteBook(e) {
	document.querySelector(`[data-index="${e.target.dataset.index}"]`).remove()
}

//Selectors

document.querySelector('.add-book').addEventListener('click', ()=> {
			addBookToLibrary()
			document.querySelector('.new-book').reset()
});

document.querySelector('.cancel').addEventListener('click', ()=> document.querySelector('.new-book').reset())





