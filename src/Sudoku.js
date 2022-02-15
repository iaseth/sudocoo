
function printDashes (n) {
	process.stdout.write("-".repeat(n));
}

export default function Sudoku () {
	this.grid = [];
	for (let i=0; i<9; i++) {
		this.grid.push([
			0, 0, 0,
			0, 0, 0,
			0, 0, 0
		]);
	}
}

Sudoku.prototype.print = function () {
	printDashes(27);
	process.stdout.write("\n");
	for (let row of this.grid) {
		for (let cell of row) {
			process.stdout.write(` ${cell} `);
		}
		process.stdout.write("\n");
	}
	printDashes(27);
	process.stdout.write("\n");
}


