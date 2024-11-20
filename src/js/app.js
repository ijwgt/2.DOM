import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
	const cells = document.querySelectorAll(".cell");
	const iconElem = document.createElement("img");
	iconElem.src = image;
	let currentIndex = 0;

	function showTarget() {
		cells.forEach((elem) => {
			elem.classList.remove("active");
		});
		const icon = document.querySelector("img");
		if (icon) {
		  icon.remove();
		}
		const randomIndex = Math.floor(Math.random() * cells.length);
		if (currentIndex !== randomIndex) {
			cells[randomIndex].insertAdjacentElement("afterbegin", iconElem);
			cells[randomIndex].classList.add("active");
			return (currentIndex = randomIndex);
		} else {
			showTarget();
		}
	}

	setInterval(showTarget, 1000);
}
)