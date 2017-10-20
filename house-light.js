
class HouseLight extends HouseComponent {
	constructor(parentElement, id) {
		super(parentElement, id, 'light');
		this.switch = false;
	}

	render() {
		if (this.componentElement == null) {
			this.componentElement = document.createElement(this.componentTag);
			this.parentElement.appendChild(this.componentElement);
			this.componentElement.innerHTML = '<div><h4>Light:</h4><div><label for="light-switch-' + this.id + '">Switch on/off: </label><input type="checkbox" id="light-switch-' + this.id + '" value="' + this.switch + '" /></div></div>';
			this.switchEl = document.getElementById('light-switch-' + this.id);
			this.switchEl.onchange = this.switchLightHandler.bind(this);
		}
	}

	switchLight (state) {
		this.switch = state;
		this.switchEl.checked = this.switch;
	}

	switchLightHandler (event) {
		this.switch = event.target.checked;
	}
}
