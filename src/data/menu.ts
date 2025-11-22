export interface MenuItem {
	title: string;
	description: string;
	price: string | number | null;
	image: string;
}
export const menu: MenuItem[] = [
	{
		title: "Empanadas",
		description:
			"Cazón, Camarón, Mechada, Pollo, Mozzarella, Molida, Salchichas, Queso y Plátano con queso",
		price: 2,
		image: "empanadas.webp",
	},
	{
		title: "Bebidas",
		description:
			"Refresco 2L 3$\nAgua 3.5$\nMalta 1.5$\nRefresco de 1Lt 2.5$\nHielo 3$",
		price: null,
		image: "bebidas.webp",
	},
	{
		title: "Combo de cervezas",
		description:
			"Cabitas 10x10$ \nCabitas 12x12$ \nCabitas 15x15$ \nHielo y destapador",
		price: null,
		image: "cervezas.webp",
	},
	{
		title: "Camarones al ajillo",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, y Papa fritas",
		price: 23,
		image: "camarones-ajillo.webp",
	},

	{
		title: "Tostón familiar",
		description: "15 pieza de tostón, Ensalada, Salsa, Queso, y Aguacate",
		price: 13,
		image: "toston-familiar.webp",
	},
	{
		title: "Combo de roncador",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, y Papa frita",
		price: 18,
		image: "combo-roncador.webp",
	},
	{
		title: "Pargo frito",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, y Papa frita",
		price: 18,
		image: "pargo-frito.webp",
	},
	{
		title: "Fosforera",
		description:
			"Camarones, Calamar, pepitona, Pulpo, Mejillón, Jaiba, Almeja, Vaquita, y Arepitas",
		price: 16,
		image: "fosforera.webp",
	},
	{
		title: "Camarones rebosado",
		description:
			"Tostón, Ensalada, Queso, Aguacate, Arepita, Papa frita, y Salsa tártara",
		price: 20,
		image: "camarones-rebosado.webp",
	},
	{
		title: "Deditos de pescado",
		description:
			"Tostón, Ensalada, Queso, Aguacate, Arepita, Papa frita, y Salsa tártara",
		price: 20,
		image: "deditos-pescado.webp",
	},
	{
		title: "Deditos de pollo",
		description:
			"Tostón, Ensalada, Queso, Aguacate, Arepita, Papa frita, y Salsa tártara",
		price: 16,
		image: "deditos-pescado.webp",
	},
	{
		title: "Medregal",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, y Papa frita",
		price: 16,
		image: "medregal.webp",
	},

	{
		title: "Mixto de camarón y calamar",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita, y Salsa tártara",
		price: 23,
		image: "mixto.webp",
	},
	{
		title: "Rueda Carite",
		description:
			"Ajillo, Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, y Papa frita",
		image: "rueda-carite.webp",
		price: 16,
	},
	{
		title: "Bebidas refrescantes",
		description:
			"Limonada frappe\nNaranjada frappe\nParchita frappe\nCon granadina $3.50",
		price: 3,
		image: "frappe.jpg",
	},
	{
		title: "Piña colada",
		description: "Sin licor $5.00\nCon licor",
		price: 6,
		image: "pina.jpg",
	},
];
