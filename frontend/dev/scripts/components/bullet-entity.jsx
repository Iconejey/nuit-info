class BulletEntity extends EntityElem {
	// <bullet-entity !img angle />

	created() {
		<This>
			<img src="/imgs/{this.img}.svg" alt="" />
		</This>;

		this.pos = { x: player.pos.x, y: player.pos.y };
		this.size = 25;

		this.render();
	}

	update(dt) {
		if (this.angle) {
			this.pos.x += 500 * Math.cos(this.angle) * dt;
			this.pos.y += 500 * Math.sin(this.angle) * dt;
		} else {
			this.pos.x += 500 * dt;
		}
		this.checkCollision();
		this.render();
	}

	checkCollision() {
		if (this.pos.x > window.innerWidth || this.pos.x < 0 || this.pos.y > window.innerHeight || this.pos.y < 0) {
			this.remove();
		}

		for (const virus of document.querySelectorAll('virus-entity')) {
			if (this.pos.x + this.size / 2 > virus.pos.x && this.pos.x < virus.pos.x + virus.size / 2 && this.pos.y + this.size / 2 > virus.pos.y && this.pos.y < virus.pos.y + virus.size / 2) {
				console.log('hit');
				this.remove();
				virus.remove();
				player.score += 5;
			}
		}
	}

	render() {
		this.setAttribute('style', `--size: ${this.size}px; left: ${this.pos.x}px; top: ${this.pos.y}px; transform: rotate(${this.angle}rad);`);
	}
}
