import confetti from "canvas-confetti";

export const runFireworks = () => {
	confetti({
		particleCount: 100,
		spread: 70,
		origin: {
			x: 0,
			y: 1,
		},
	});
	confetti({
		particleCount: 100,
		spread: 70,
		origin: {
			x: 1,
			y: 1,
		},
	});
};
