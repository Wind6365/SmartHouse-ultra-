
class SmartHouse {
	constructor(componentContainer) {
		this.nextComponentId = 0;
		this.components = [];
		this.componentContainer = componentContainer;
	}

	render () {
		this.components.forEach(component => component.render());
	}

	doComponentAction (type, action) {
		this.components.forEach(component => {
			if (component.type === type) {
				action(component);
			}
		});
		this.render();
	}

	switchLight (state) {
		this.doComponentAction('light', component => component.switchLight(state));
	}

	toggleWindows (state) {
		this.doComponentAction('window', component => component.openClose(state));
	}

	scrollCurtains (state) {
		this.doComponentAction('window', component => component.scrollCurtain(state));
	}

	addComponent (itemConstructor) {
		this.components.push(new itemConstructor(componentContainer, this.nextComponentId++));
		this.render();
	}

	removeComponent (type) {
		let removedComponent = null;
		this.components.forEach((component) => {
			if (component.type === type && removedComponent === null) {
				component.remove();
				removedComponent = component;
			}
		});

		if (removedComponent) {
			this.components.splice(this.components.indexOf(removedComponent), 1);
			this.render();
		}
	}
}
