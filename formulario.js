//(function(){
var formulario = document.getElementById('formulario'),
	nombre = formulario.nombre,
	correo = formulario.correo,
	sexo = formulario.sexo,
	terminos = formulario.terminos,
	error = document.getElementById('error');


	function validarNombre(e){
		if(nombre.value == '' || nombre.value == null){
			console.log('Completa los datos');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarCorreo(e){
		if(correo.value == '' || correo.value == null)
		{
			console.log('Completa los datos');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa el correo</li>';
			e.preventDefault();
		}else {
			error.style.display = 'none';
		}

	}
	function validarSexo(e){
		console.log('Completa los datos');
		if( sexo.value == '' || sexo.value == null){
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Completa el campo</li>';
			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
		
	}
	function validarTerminos(e){
		console.log('Completa los datos');
		if(terminos.checked == false){
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Acepta los términos</li>';
			e.preventDefault();
	}else {
			error.style.display = 'none';
	}
}

	//Funcion que contiene las demas funciones
	function validarFormulario(e){
		
		error.innerHTML = '';

		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
		
	}

	formulario.addEventListener('submit',validarFormulario);












//}())