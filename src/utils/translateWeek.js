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