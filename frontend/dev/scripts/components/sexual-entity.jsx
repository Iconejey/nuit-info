class SexualEntity extends EntityElem {
	// <sexual-entity />

	created() {
		this.name = ['penis', 'vagina'][Math.floor(Math.random() * 2)];

		<This>
			<img src="/imgs/{this.name}.svg" />
		</This>;

		this.pos = { x: innerWidth - this.clientWidth / 2, y: Math.random() * innerHeight };
		this.size = 45;
		this.target = { x: 0, y: 0 };

		this.randomTargetInterval = setInterval(() => this.setRandomTarget(), 3000);
		setTimeout(() => this.remove(), 15000);

		this.render();
	}

	update(dt) {
		let dx = this.target.x - this.pos.x;
		let dy = this.target.y - this.pos.y;

		if (dx == 0 && dy == 0) {
			this.setRandomTarget();
			this.update();
			return;
		}

		if (dx < 0) dx = -1;
		if (dx > 0) dx = 1;
		if (dy < 0) dy = -1;
		if (dy > 0) dy = 1;

		this.pos.x += dx * dt * 170;
		this.pos.y += dy * dt * 170;

		this.checkCollision();
		this.render();
	}

	setRandomTarget() {
		this.target.x = Math.random() * innerWidth;
		this.target.y = Math.random() * innerHeight;
	}

	checkCollision() {
		if (this.pos.x + this.size / 2 > player.pos.x && this.pos.x < player.pos.x + player.size / 2 && this.pos.y + this.size / 2 > player.pos.y && this.pos.y < player.pos.y + player.size / 2) {
			player.collide(this);
		}

		if (this.pos.x - this.clientWidth / 2 < 0) {
			this.pos.x = 0 + this.clientWidth / 2;
			return;
		}

		if (this.pos.x + this.clientWidth / 2 > innerWidth) {
			this.pos.x = innerWidth - this.clientWidth / 2;
			return;
		}

		if (this.pos.y - this.clientHeight / 2 < 0) {
			this.pos.y = 0 + this.clientHeight / 2;
			return;
		}

		if (this.pos.y + this.clientHeight / 2 > innerHeight) {
			this.pos.y = innerHeight - this.clientHeight / 2;
			return;
		}
	}
}
