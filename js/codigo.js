$(document).ready( function(){
    $("#table").dynamicTable({
        columns:[
            {text: 'Nombre', key: 'nombre'},
            {text: 'Edad', key: 'edad'},
            {text: 'Género', key: 'genero'},
            {text: 'País', key: 'pais'},
        ],
        data: [
            {nombre: 'Juan Antonio', edad: 33, genero:'M', pais:'Perú'},
        ],
        buttons: {
            addButton:'<input type="button" value="Agregar" class="btn btn-primary" />',
            cancelButton:'<input type="button" value="Cancelar" class="btn btn-danger" />',
            deleteButton:'<input type="button" value="Eliminar" class="btn btn-danger" />',
            editButton:'<input type="button" value="Editar" class="btn btn-warning" />',
            saveButton:'<input type="button" value="Guardar" class="btn btn-success" />',
        },
        getControl: function(columnKey){
            if(columnKey == 'edad') return '<input type="number" class="form-control" />';
            if(columnKey == 'genero') return `
                <select class="form-control">
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            `;
            return '<input type="text" class="form-control" />';
        }
    });
});