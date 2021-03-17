/*  milestone 1:
definire un array di oggetti; ogni oggetto rappresenta un'icona, 
che è caratterizzata da: nome, prefisso, tipo e famiglia.
Utilizzando la funzione forEach e il template literal, visualizzare 
in pagina tutte le icone con il proprio nome. */

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//milestone 1
// icons.forEach((element)=>{
// 	const {name, prefix, type, family} = element;
// 	document.getElementById("container").innerHTML +=
// 	`
// 	<div class="iconContainer"> <i class="${family} ${prefix}${name}"></i> <span class="iconName">${name}</span> </div>
// 	`
// });

/*  milestone 2:
definire un array di colori e associare ad ogni tipo di icona un colore.
Visualizzare le icone di colore diverso in base al tipo. */



// animali vegetali user

const iconsColor = icons.map((element)=>{
	const colors = ["blue", "orange", "green"];

	if (element.type == "animal") {
		element.color = colors[0];
		return element	
	} else if (element.type == "vegetable") {
		element.color = colors[1];
		return element
	} else if (element.type == "user") {
		element.color = colors[2];
		return element
	}
});

console.log(iconsColor)

//milestone 2
icons.forEach((element)=>{
	const {name, prefix, type, family, color} = element;
	document.getElementById("container").innerHTML +=
	`
	<div class="iconContainer" style="color: ${color}"> <i class="${family} ${prefix}${name}"></i> <span class="iconName">${name}</span> </div>
	`
});