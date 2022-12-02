class VirusEntity extends EntityElem {
	// <virus-entity />

	created() {
		this.pos = { x: window.innerWidth + 50, y: Math.random() * window.innerHeight };
		this.size = 40;
		this.name = ['chlamydiose', 'syphilis', 'herpes', 'VIH', 'gonorrhée', 'hepatite B', 'papillomavirus', 'mycoplasme'][Math.floor(Math.random() * 8)];

		<This>
			<img src="/imgs/{this.name}.svg" />
		</This>;

		this.render();
	}

	sinusoidal(dt) {
		this.pos.x -= Math.random() * 600 * dt;
		this.pos.y += Math.sin(this.pos.x / 200) * Math.random() * 100 * dt;
	}

	update(dt) {
		this.sinusoidal(dt);
		this.checkCollision();
		this.render();
	}

	checkCollision() {
		if (this.pos.x < 0) {
			this.remove();
		}

		if (this.pos.x < player.pos.x + player.size.w && this.pos.x + this.size.w > player.pos.x && this.pos.y < player.pos.y + player.size.h && this.pos.y + this.size.h > player.pos.y) {
			player.collide(this);
		}
	}
}
