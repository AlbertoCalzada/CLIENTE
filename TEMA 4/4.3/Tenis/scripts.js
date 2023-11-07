function Tenis() {

    //Forma lenta
    var tenistas = ['Rafael Nadal', 'Novak Djokovic', 'David Ferrer', 'Andy Murray'];
    var meses = ['Mayo', 'Junio', 'Julio'];
    var puntos = [
        [1000, 1250, 1650],
        [1250, 1450, 1650],
        [800, 1050, 1150],
        [1500, 1850, 2050]
    ];

    document.write('<table border=1px>');


    document.write('<tr>');
    document.write('<th>Mes</th>');
    for (var i = 0; i < meses.length; i++) {
        document.write('<td>' + meses[i] + '</td>');
    }
    document.write('</tr>');


    for (var j = 0; j < tenistas.length; j++) {
        document.write('<tr>');
        document.write('<td>' + tenistas[j] + '</td>');
        for (var i = 0; i < meses.length; i++) {
            document.write('<td>' + puntos[j][i] + '</td>');
        }
        document.write('</tr>');
    }

    document.write('</table>');


    //Forma fácil:
    var puntos = [
        [
            "Rafael Nadal",
            [1000, 1250, 1650]
        ],
        [
            "Novak Djokovic",
            [1250, 1450, 1650]
        ],
        [
            "David Ferrer",
            [800, 1050, 1150]
        ],
        [
            "Andy Murray",
            [1500, 1850, 2050]
        ]
    ]

}