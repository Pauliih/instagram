function add(){
	// Para guardar el comentario, saco el valor de este elemento
	var comments = document.getElementById("comment").value; // Agarra al comentario
	document.getElementById("comment").value = ""; // Limpia la caja de comentarios

	var newComments = document.createElement('div'); //Creamos el contenedor para los comentarios
	var cont = document.getElementById('cont'); //Obtenemos el ID den contendor

	//Creamos un checkbox
	var check = document.createElement('input');
	check.type='checkbox';

	//Creo un párrafo (papá)
	var paragraph = document.createElement('p');
	paragraph.classList.add('color');
	//Creamos un nodo de texto (hijo)
	var nodoText = document.createTextNode(comments);
	paragraph.appendChild(nodoText);

	//Creamos el icono de corazon
	var heart = document.createElement('i');
	heart.classList.add('fa','fa-heart','heart');

	//Creamos el icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa','fa-trash','trash');

	//Le asignamos los hijos al contenedor
	newComments.appendChild(paragraph);
	newComments.appendChild(check);
	newComments.appendChild(heart);
	newComments.appendChild(trash);
	cont.appendChild(newComments);

	//HACER QUE SE TACHE EL COMENTARIO AL SELECCIONAR EL CHECKBOX
	// Buscar 
	check.addEventListener('click', function(){
		paragraph.classList.toggle('strike-out');
	})

	trash.addEventListener('click', function(){
		cont.removeChild(newComments);
	})

	heart.addEventListener('click', function(){
		heart.classList.toggle('red');	
	})
	
}

// TAREA:
// Validar que no se puedan ingresar comentarios "vacíos".