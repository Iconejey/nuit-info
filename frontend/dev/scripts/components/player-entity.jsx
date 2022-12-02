class PlayerEntity extends EntityElem {
	// <player-entity !img .press />

	created() {
		<This>
			<img src="/imgs/{this.img}.svg" />
		</This>;

		this.pos = { x: innerWidth / 8, y: innerHeight / 2 };
		this.target = { ...this.pos };
		this.size = 100;
		this.condoms = 1;
		this.score = 0;

		this.fireinterval = setInterval(() => this.fire(), 200);
		this.scoreinterval = setInterval(() => this.score++, 800);
		this.condomsinterval = setInterval(() => this.condoms++, 60 * 1000);
		this.setMouseEvents();
		this.render();
	}

	setMouseEvents() {
		addEventListener('mousedown', e => {
			this.press = true;
			this.target = { x: e.clientX, y: e.clientY };
			addEventListener('mouseup', () => (this.press = false), { once: true });
		});

		addEventListener('mousemove', e => {
			if (this.press) this.target = { x: e.clientX, y: e.clientY };
			this.edges();
		});
	}

	update(dt) {
		const dx = this.target.x - this.pos.x;
		const dy = this.target.y - this.pos.y;

		this.pos.x += dx * dt * 10;
		this.pos.y += dy * dt * 10;

		this.render();

		const condoms_div = document.querySelector('.condoms');
		condoms_div.innerHTML = '';
		for (let i = 0; i < this.condoms; i++) {
			condoms_div.appendChild(<img src="/imgs/condom.svg" />);
		}
	}

	collide(entity) {
		if (entity.constructor.name == 'VirusEntity') {
			if (this.condoms > 0) {
				this.condoms--;
				entity.remove();
				return;
			}
			this.gameOver(entity);
			return;
		}

		if (entity.constructor.name == 'SexualEntity') {
			entity.remove();
			return;
		}

		if (entity.constructor.name == 'CollectableEntity') {
			this.condoms++;
			entity.remove();
			return;
		}
	}

	edges() {
		this.target.x = Math.max(this.target.x, 0);
		this.target.x = Math.min(this.target.x, innerWidth);
		this.target.y = Math.max(this.target.y, 0);
		this.target.y = Math.min(this.target.y, innerHeight);
	}

	gameOver(enemy) {
		// For now, but we willadd a global componentto handle this
		console.log(enemy.name);
	}

	fire() {
		document.body.appendChild(<bullet-entity img="bullet"></bullet-entity>);
	}

	bonusFire() {
		for (let i = 0; i < 360; i += 5) {
			// shoot in a half circle
			document.body.appendChild(<bullet-entity img="bullet" angle={i}></bullet-entity>);
		}
	}

	startBonus() {
		clearInterval(this.fireinterval);
		this.fireinterval = setInterval(() => this.bonusFire(), 200);
	}

	endBonus() {
		clearInterval(this.fireinterval);
		this.fireinterval = setInterval(() => this.fire(), 300);
	}

	putCondom() {
		if (this.condoms === 0) return;

		player.condoms--;

		const condom = <img src="/imgs/condom_penis.svg" />;

	}
}
