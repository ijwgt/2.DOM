const body = document.querySelector('body');
const container = document.createElement("div");
container.classList.add("container");
body.insertAdjacentElement("afterbegin", container);

let i = 0;
while (i < 16) {
	const cell = document.createElement('div');
	cell.classList.add("cell");
	container.insertAdjacentElement("afterbegin", cell);
	i++
}