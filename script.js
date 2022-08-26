var input_estrella = document.querySelectorAll('input')
var btn = document.querySelector('.btn_valorar');
var nombre_empleado = document.querySelector('.informacion_nombre');
var texto = document.querySelector('#texto_explicativo')
btn.addEventListener('click', function(e){
    e.preventDefault()
    estrella_seleccionada();
});

function estrella_seleccionada(){
    var count = 1;
    input_estrella.forEach(estrella=>{
        if(estrella.checked == true){
            var valoracion = estrella.value;
            alert(valoracion)
            if (valoracion > 8 ) {
                alert('nos alegramos que haya sido de su agrado el trato recivido por parte del empleado ' + nombre_empleado + '.')
                
            } else if (valoracion < 9 && valoracion > 7) {
                if (texto.textContent == '') {
                    alert('Nos preocupa que no haya recibido la atención que esperaba, agradeceriamos un breve comentario para poder subsanar los problemas ocasionados, disculpe las molestas.')
                } else {
                    alert('Disculpe las molestias, con la explicación que nos ha proporcionado procuraremos mejorar para futuras ocasiones.')
                }

            } else if (valoracion < 6) {
                alert('No sea grosera/o y procure no descargar su frustración en este formulario, nos entristece su mal estar pero que le den por el culo maleducado, ni un 6 le vas a dar al pobre empleado... SINVERGÜENZA!!')
            }

        } else if (count != input_estrella.length){            
            count += 1;
            console.log(valoracion)
            console.log(count)
        } else if(count == input_estrella.length){
            alert('No se olvide de valorar y dejar un mensaje sobre la atención recibida por el empleado, gracias por su tiempo.');
        }
        
    });
}
