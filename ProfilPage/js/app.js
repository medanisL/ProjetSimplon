"use strict";

$(document).ready(function(){

	$('body').on('click','a',function(event){

		event.preventDefault();

		$('.par').hide(); // la class .par pointe sur nos elements paragraphe qui sont caché en css , on utilise le .hide pour caché les element non selectionné par le a cliqué !!

		var val= $(this).attr("href"); // this : l'element 'a 'cliqué en cours ! 

		if (val=="#contact"){

			$('#conteneur').show();
			
			$('#close').on('click',function(){ // on est obligé de mettre l'evenement a l'interieur de la condition quand le conteneur est affiché sinon ca marche pas

			$('#conteneur').hide();

			});
		
		}		
		
		else{

			$(val).show();
			
		}	

	});






	$.getJSON('https://s.idsympa.com/u-15.json', function(data) { // data retourne json 

			/*var t =$('[elt]'); // variable qui recupere les elements avec attribut elt (first name et last name)

			for (var i=0; i< t.length; i++) 

			{
				var attribut=$(t[i]).attr("elt"); // variable qui recupere la valeur de l'attribut donc soit la valeur de first name soit de last name
				var valeur= data[attribut]; // data[attribut] recupere la valeur de la clé qui corespon a notre attribut et la met dans une variable valeur
				$(t[i]).html(valeur); // remplace les span elt donc soit first name soit last name par la variable valeur correspendante dans html ,
			}*/

			/*
			var infofull_name= Mustache.to_html('{{first_name}} {{last_name}}', data);	// charger les fichier dynamiquement avec une methode simple mustache
			$('h1').html(infofull_name);

			var infoOccupation=Mustache.to_html('{{occupation}}', data);
			$('h3').html(infoOccupation);
			*/

			var template = $('#template').html();
			Mustache.parse(template); 
			var rendered = Mustache.render(template, data);
			$('body').html(rendered);




	});

	


});
