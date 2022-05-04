const text = document.getElementById('text')
const view = document.getElementById('view')

const update = () => {
	text.addEventListener('keyup', () => {
		view.srcdoc = text.value
	})
}

update()