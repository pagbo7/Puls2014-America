var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$post = $('.item').first(),
	$lista = $('#contenido');

function mostrarOcultarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var titulo = $titulo.val(),
  		url = $url.val(),
  		$clone = $post.clone();

	$clone.find('.title_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$lista.prepend($clone);

  	$clone.slideDown();

  	return false;
}

$('#publicar_nav a').click(mostrarOcultarFormulario)
$('#formulario').on('submit', agregarPost)