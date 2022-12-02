const player = document.querySelector('player-entity');
let shouldTick = true;
let last_dt = 1;

const virusSpawn = setInterval(() => {
	if (shouldTick == false) return;
	document.body.appendChild(<virus-entity img="virus"></virus-entity>);
}, 700);

const sexualSpawn = setInterval(() => {
	if (shouldTick == false) return;
	document.body.appendChild(<sexual-entity img="sexe"></sexual-entity>);
}, 20000);

// setInterval(() => {
// 	document.body.appendChild(<collectable-entity img="condom"></collectable-entity>);
// }, 50000);

//document.body.appendChild(<collectable-entity img="condom"></collectable-entity>);

function tick(time) {
	if (shouldTick == false) return;

	const dt = (time - last_dt) / 1000;
	last_dt = time;

	player.update(dt);

	for (const entity of [...document.querySelectorAll('virus-entity'), ...document.querySelectorAll('bullet-entity'), ...document.querySelectorAll('sexual-entity'), ...document.querySelectorAll('collectable-entity')]) {
		entity.update(dt);
	}

	document.querySelector('.score').innerHTML = player.score;

	requestAnimationFrame(tick);
}

tick(1);

// document.body.appendChild(<unlock-screen id="chlamydia"></unlock-screen>);
