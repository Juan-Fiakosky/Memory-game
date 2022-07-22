var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
	["🧉", "🍦"],
	["🦈", "👽"],
	["🦁", "🤖", "🍾", "👺"],
	["🤡", "💩", "🎃", "🥑"],
	["☠️", "👾", "🍔", "🎱"],
];
var nivelActual = 0;
var niveles = [
	{
		tarjetas: grupoTarjetas[0],
		movimientosMax: 5,
	},
	{
		tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
		movimientosMax: 15,
	},
	{
		tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
		movimientosMax: 25,
	},
	{
		tarjetas: grupoTarjetas[0].concat(
			grupoTarjetas[1],
			grupoTarjetas[2],
			grupoTarjetas[3]
		),
		movimientosMax: 35,
	},
	{
		tarjetas: grupoTarjetas[0].concat(
			grupoTarjetas[1],
			grupoTarjetas[2],
			grupoTarjetas[3],
			grupoTarjetas[4]
		),
		movimientosMax: 60,
	},
];
