
class HouseWindow extends HouseComponent {
	constructor(parentElement, id) {
		super(parentElement, id, 'window');
		this.isOpen = false;
		this.curtainState = 0; // 0 - opened, 100 - closed
	}

	render () {
		if (this.componentElement == null) {
			this.componentElement = document.createElement(this.componentTag);
			this.parentElement.appendChild(this.componentElement);
		}
		this.componentElement.innerHTML =
			'<div><h4>Window:</h4>' +
			'<div><label for="light-switch-' + this.id + '">Is Opened: </label><input type="checkbox" id="open-switch-' + this.id + '" /></div>' +
			'<div><span>Curtain Opened: ' + (100 - this.curtainState) + '%</span></div>' +
			'</div>';
		this.isOpenEl = document.getElementById('open-switch-' + this.id);
		this.openClose(this.isOpen);
		this.isOpenEl.onchange = this.openCloseHandler.bind(this);
	}

	scrollCurtain (scroll) {
		if (scroll > 0) {
			this.curtainState = (this.curtainState + scroll) > 100
				? 100
				: this.curtainState + scroll;
		} else {
			this.curtainState = (this.curtainState + scroll) < 0
				? 0
				: this.curtainState + scroll;
		}
	}

	openClose (state) {
		this.isOpen = state;
		this.isOpenEl.checked = this.isOpen;
	}

	openCloseHandler (event) {
		this.isOpen = event.target.checked;
	}
}
