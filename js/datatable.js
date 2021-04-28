$(document).ready(function(){
    $("#datatable").dataTable({
        ajax: '../assets/data.json',
        columns: [
            { data: 'nombre' },
            { data: 'empleo' },
            { data: 'area' }
        ]
    });
});