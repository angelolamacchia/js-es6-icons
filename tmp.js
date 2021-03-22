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

const colors = ["blue", "orange", "green"];

//definisco le tipologie
var types = [];

icons.forEach((element)=>{
	if (types.includes(element.type)==false){
		types.push(element.type);
	}
});

//associo il colore alla tipologia
const iconsColor = icons.map((element)=>{

	switch (element.type) {
		case "animal":
			element.color = colors[types.indexOf("animal")];
			return element;
		
		case "vegetable":
			element.color = colors[types.indexOf("vegetable")];
		 	return element;

		case "user":
			element.color = colors[types.indexOf("user")];
		  	return element;
	  };

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


/*  milestone 3:
aggiungere una select per filtrare le icone in base al tipo.
Popolare le options della select dinamicamente e, ogni volta 
che cambia il valore selezionato, visualizzare le icone corrispondenti. */

// tipi: animali vegetali user
const animals = icons.filter((element)=>{
	if (element.type == "animal")
	return element.type;
});
const vegetables = icons.filter((element)=>{
	if (element.type == "vegetable")
	return element.type;
});
const users = icons.filter((element)=>{
	if (element.type == "user")
	return element.type;
});

const selectContainer = $(".selectContainer");
const select = $("#select");

//milestone 3
select.change( function () {
	//pulisco il container prima di ogni selezione
	$("#container").html(" ");

	const optionSelected = $(this).val();
	switch (optionSelected) {
		case "animal":
			return animals.forEach((element)=>{
				const {name, prefix, type, family, color} = element;
				document.getElementById("container").innerHTML +=
				`
				<div class="iconContainer" style="color: ${color}"> <i class="${family} ${prefix}${name}"></i> <span class="iconName">${name}</span> </div>
				`
			});
		
		case "vegetable":
			return vegetables.forEach((element)=>{
				const {name, prefix, type, family, color} = element;
				document.getElementById("container").innerHTML +=
				`
				<div class="iconContainer" style="color: ${color}"> <i class="${family} ${prefix}${name}"></i> <span class="iconName">${name}</span> </div>
				`
			});

		case "user":
			return users.forEach((element)=>{
				const {name, prefix, type, family, color} = element;
				document.getElementById("container").innerHTML +=
				`
				<div class="iconContainer" style="color: ${color}"> <i class="${family} ${prefix}${name}"></i> <span class="iconName">${name}</span> </div>
				`
			});

		case "all":
			return icons.forEach((element)=>{
				const {name, prefix, type, family, color} = element;
				document.getElementById("container").innerHTML +=
				`
				<div class="iconContainer" style="color: ${color}"> <i class="${family} ${prefix}${name}"></i> <span class="iconName">${name}</span> </div>
				`
			});

	  };

	  $(".container .iconContainer i").click(function(){
		$(this).css("color","white");
	  });

	//   $("li").click(function () {
	// 	$(this).toggleClass("white");
	// });
});