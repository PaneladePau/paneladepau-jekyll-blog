'use strict';

var $divBusca = $('.campo-busca'),
	$inputBusca = $('.input-busca'),
	$botaoBusca = $('.botao-busca'),
	$fechaBusca = $('.fecha-busca'),

	buscaInit = false,
	json,
	paramBusca;

function abreBusca() {
	$divBusca.show();
	$inputBusca.focus();
}

function limpaResultados() {
	$('.resultado').each(function() {
		$(this).remove();
	});
}

function fechaBusca() {
	$divBusca.hide();
	$inputBusca.val('');
	limpaResultados();
}

function iniciaBusca() {
	$.get('search.json', function(data) {
		json = data;
		limpaAcentosParam(paramBusca);
		buscaInit = true;
	});
}

function fazBusca(busca) {
	var html = '';

	console.log(busca);
	for (var ia = 0; ia < busca.length; ia++) {
		if (busca[ia].length > 2 && busca[ia] !== 'com') {
			limpaResultados();
			for (var ij = 0; ij < json.length; ij++) {

				if (trocaAcentos(json[ij].titulo).toLowerCase().indexOf(busca[ia]) >= 0) {
					html += '<a class="resultado" href="' + json[ij].link + '">'
							+ json[ij].titulo
							+ '<span class="data">'
							+ json[ij].data
							+ '</span></a>'
				}
				if (ij === json.length - 1) {
					$divBusca.append(html);
				}
			}	
		}
	}
}

function trocaAcentos(string) {
	return string
			.replace(/á/g, 'a')
			.replace(/à/g, 'a')
			.replace(/ã/g, 'a')
			.replace(/é/g, 'e')
			.replace(/í/g, 'i')
			.replace(/ó/g, 'o')
			.replace(/õ/g, 'o')
			.replace(/ú/g, 'u')
			.replace(/ç/g, 'c')
			.replace(/s/g, '');
}

function limpaAcentosParam(array) {
	console.log(array);
	for (var i = 0; i < array.length; i++) {
		array[i] = trocaAcentos(array[i]);
						
		if (i === array.length - 1) {
			paramBusca = array;
			fazBusca(paramBusca);
		}
	}
}

$botaoBusca.on('click', abreBusca);

$fechaBusca.on('click', fechaBusca);

$inputBusca.on('keypress', function() {
	paramBusca = $inputBusca.val().toLowerCase().split(' ');
	if (event.keyCode === 13 && $inputBusca.val().length > 2) {
		if (!buscaInit) {
			iniciaBusca();
		} else {
			limpaAcentosParam(paramBusca);
		}
	}
});