class EntityElem {
	// <aentity-elem !img />

	created() {
		throw new Error('[EntityElem][created()] Not implemented');
	}

	move() {
		throw new Error('[EntityElem][move()] Not implemented');
	}

	update(dt) {
		throw new Error('[EntityElem][update()] Not implemented');
	}

	render() {
		this.setAttribute('style', `--size: ${this.size}px; left: ${this.pos.x}px; top: ${this.pos.y}px;`);
	}

	edges() {
		throw new Error('[EntityElem][edge()] Not implemented');
	}
}
