const conditions = [
    { code: '0', condition: 'Tornado' },
    { code: '1', condition: 'Tempestade Tropical' },
    { code: '2', condition: 'Furacão' },
    { code: '3', condition: 'Tempestade Severa' },
    { code: '4', condition: 'Trovoadas' },
    { code: '5', condition: 'Chuva/ Neve' },
    { code: '6', condition: 'Chuva/ Granizo Fino' },
    { code: '7', condition: 'Neve e Granizo Fino' },
    { code: '8', condition: 'Garoa Gélida' },
    { code: '9', condition: 'Garoa' },
    { code: '10', condition: 'Chuva Gélida' },
    { code: '11', condition: 'Chuvisco' },
    { code: '12', condition: 'Chuva' },
    { code: '13', condition: 'Neve em Flocos Finos' },
    { code: '14', condition: 'Leve Precipitação de Neve' },
    { code: '15', condition: 'Ventos com Neve' },
    { code: '16', condition: 'Neve' },
    { code: '17', condition: 'Chuva de Granizo' },
    { code: '18', condition: 'Pouco Granizo' },
    { code: '19', condition: 'Pó em Suspensão' },
    { code: '20', condition: 'Neblina' },
    { code: '21', condition: 'Névoa Seca' },
    { code: '22', condition: 'Enfumaçado' },
    { code: '23', condition: 'Vendaval' },
    { code: '24', condition: 'Ventando' },
    { code: '25', condition: 'Frio' },
    { code: '26', condition: 'Nublado' },
    { code: '27', condition: 'Muitas Nuvens' },
    { code: '28', condition: 'Muitas Nuvens' },
    { code: '29', condition: 'Parcialmente Nublado' },
    { code: '30', condition: 'Parcialmente Nublado' },
    { code: '31', condition: 'Céu Limpo' },
    { code: '32', condition: 'Ensolarado' },
    { code: '33', condition: 'Tempo Bom' },
    { code: '34', condition: 'Tempo Bom' },
    { code: '35', condition: 'Chuva e Granizo' },
    { code: '36', condition: 'Quente' },
    { code: '37', condition: 'Tempestades Isoladas' },
    { code: '38', condition: 'Tempestades Esparsas' },
    { code: '39', condition: 'Tempestades Esparsas' },
    { code: '40', condition: 'Chuvas Esparsas' },
    { code: '41', condition: 'Nevasca' },
    { code: '42', condition: 'Tempestades de Neve Esparsas' },
    { code: '43', condition: 'Nevasca' },
    { code: '44', condition: 'Parcialmente Nublado' },
    { code: '45', condition: 'Chuva com Trovoadas' },
    { code: '46', condition: 'Tempestade de Neve' },
    { code: '47', condition: 'Relâmpagos e Chuvas Isoladas' },
    { code: '3200', condition: 'Não Disponível' }
]	

export const translateConditions = (code) => {
    var temp;
    conditions.forEach((c) => {
        if(c.code === code ) {
            temp = c.condition
        }
    })
    
    return temp;
};