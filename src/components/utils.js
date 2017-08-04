export const translateWeek = (day) => {

    switch (day) {
        case 'Sun':
            return 'Domingo';
            break;
        case 'Mon':
            return 'Segunda';
            break;
        case 'Tue':
            return 'Terça';
            break;
        case 'Wed':
            return 'Quarta';
            break;
        case 'Thu':
            return 'Quinta';
            break;
        case 'Fri':
            return 'Sexta'
            break
        case 'Sat':
            return 'Sábado'
            break
        default:
            return `${day} não é um dia de semana`
    }
}

const conditions = [
    [ '0', 'Tornado' ],
    [ '1', 'Tempestade Tropical' ],
    [ '2', 'Furacão' ],
    [ '3', 'Tempestade Severa' ],
    [ '4', 'Trovoadas' ],
    [ '5', 'Chuva/ Neve' ],
    [ '6', 'Chuva/ Granizo Fino' ],
    [ '7', 'Neve e Granizo Fino' ],
    [ '8', 'Garoa Gélida' ],
    [ '9', 'Garoa' ],
    [ '10', 'Chuva Gélida' ],
    [ '11', 'Chuvisco' ],
    [ '12', 'Chuva' ],
    [ '13', 'Neve em Flocos Finos' ],
    [ '14', 'Leve Precipitação de Neve' ],
    [ '15', 'Ventos com Neve' ],
    [ '16', 'Neve' ],
    [ '17', 'Chuva de Granizo' ],
    [ '18', 'Pouco Granizo' ],
    [ '19', 'Pó em Suspensão' ],
    [ '20', 'Neblina' ],
    [ '21', 'Névoa Seca' ],
    [ '22', 'Enfumaçado' ],
    [ '23', 'Vendaval' ],
    [ '24', 'Ventando' ],
    [ '25', 'Frio' ],
    [ '26', 'Nublado' ],
    [ '27', 'Muitas Nuvens' ],
    [ '28', 'Muitas Nuvens' ],
    [ '29', 'Parcialmente Nublado' ],
    [ '30', 'Parcialmente Nublado' ],
    [ '31', 'Céu Limpo' ],
    [ '32', 'Ensolarado' ],
    [ '33', 'Tempo Bom' ],
    [ '34', 'Tempo Bom' ],
    [ '35', 'Chuva e Granizo' ],
    [ '36', 'Quente' ],
    [ '37', 'Tempestades Isoladas' ],
    [ '38', 'Tempestades Esparsas' ],
    [ '39', 'Tempestades Esparsas' ],
    [ '40', 'Chuvas Esparsas' ],
    [ '41', 'Nevasca' ],
    [ '42', 'Tempestades de Neve Esparsas' ],
    [ '43', 'Nevasca' ],
    [ '44', 'Parcialmente Nublado' ],
    [ '45', 'Chuva com Trovoadas' ],
    [ '46', 'Tempestade de Neve' ],
    [ '47', 'Relâmpagos e Chuvas Isoladas' ],
    [ '3200', 'Não Disponível' ]
];	

export const translateConditions = (code) => {
    var temp;
    conditions.forEach((c) => {
        if(c[0] === code ) {
            temp = c[1]
        }
    })
    
    return temp;
};