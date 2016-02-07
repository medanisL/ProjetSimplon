
$(document).ready(function(){

	$('form').on('submit',function(event){  // submit est le nom de l'evenement , il se passe un avant et un apres avec les evenement 

		event.preventDefault(); // on mentionne qu'il ya pas un apres sur l'evenement ( excute dans le corp de la fonction)

		var aAjouter = $('input[id=texte]').val(); // variable qui prend la valeur de l'input de recherche
		$('.list').append('<div class="item"><input type="checkbox" class="check" ><button class="bouton"> delete </button> ' + aAjouter + '</div>');
		// sur la class liste du div principal on ajoute une div(class item) avec un input de type checkboxe et on lui ajoute notre variable aAjouter, et on ajoute un bouton delete 
		calcul();


	});

	$('.list').on('click','.check',function(){  // sur le div principal (class list) quand on clique sur la classe check de l'element item ajouté

		$(this).parent('div').toggleClass('effectue'); // l'element checké son parent div se fait barré avec la classe effectue,   

		calcul();

	});


	$('.list').on('click','.bouton',function(){  // 

		$(this).parent('div').remove(); // 

		calcul();
	});


	$('.comp').click(function(){
		
		$('.item').hide(); // cacher tout les element
		$('.effectue').show();// ceux qui ont la classe effectue apparaisse
		calcul();
	});


	$('.active').click(function(){
		
		$('.item').show(); // montrer tout les element
		$('.effectue').hide(); // cacher ceux qui ont la class effectue ( barré )

	});

	$('.all').click(function(){
		
		$('.item').show();
		

	});

	$('.clearcom').click(function(){

		$('.effectue').remove();
		calcul();

	});


	function calcul() {

		var compteur=$('.item:not(.effectue)').length;
		if (compteur<=1)
		{
			$('p').html(compteur + " " + "item left" );
		}
		else 
		{
			$('p').html(compteur + " " + "items left" );
		}


	};



 });