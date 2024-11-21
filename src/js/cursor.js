import hammerCursorImage from "../img/hammer.png";

export default function changeCursor(element) {
	element.style.cursor = `url(${hammerCursorImage}), auto`;
}
