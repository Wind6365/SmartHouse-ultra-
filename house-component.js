
class HouseComponent {
	constructor(parentElement, id, type) {
		this.componentTag = 'li';
		this.parentElement = parentElement;
		this.componentElement = null;
		this.id = id;
		this.type = type;
	}

	remove () {
		if (this.componentElement && this.componentElement.parentElement) {
			this.componentElement.parentElement.removeChild(this.componentElement);
		}
	}
}
