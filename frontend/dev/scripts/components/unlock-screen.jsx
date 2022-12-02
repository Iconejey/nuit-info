class UnlockScreen {
	// <unlock-screen id />

	async created() {
		// Load title and, description from resources.json
		const res = await fetch('/ressources.json');
		const { title, description } = (await res.json())[this.id];

		<This>
			<h1>{title}</h1>
			<p>{description}</p>
		</This>;
	}

	gameOver(virus) {
		shouldTick = false;
	}

	restart() {
		shouldTick = true;
		tick(1);
	}

	sexuallyUnlocked(sexualEntity) {}
}
