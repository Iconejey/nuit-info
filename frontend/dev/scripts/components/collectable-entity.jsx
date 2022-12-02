class CollectableEntity extends EntityElem {
	// <collectable-entity />

	created() {
		<This>
			<img src="/imgs/condom.svg" alt="" />
		</This>;

		this.pos = { x: Math.random() * innerWidth, y: Math.random() * innerHeight };
		this.size = 25;

		this.render();
	}

	checkCollision() {
		if (this.pos.x + this.size / 2 > player.pos.x && this.pos.x < player.pos.x + player.size / 2 && this.pos.y + this.size / 2 > player.pos.y && this.pos.y < player.pos.y + player.size / 2) {
			player.collide(this);
		}
	}

	update(dt) {
		this.checkCollision();
		this.render();
	}
}
