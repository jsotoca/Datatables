$(document).ready( () => {
    $.getJSON("../assets/get.json", (data) => {
        let datos = '';
        $.each(data, (llave,valor) => {
            datos += `
                <tr>
                    <td>${valor.nombre}</td>
                    <td>${valor.empleo}</td>
                    <td>${valor.area}</td>
                </tr>
            `;
        });
        $('#datatable').append(datos);
    });
});