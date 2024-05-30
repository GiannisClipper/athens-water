function timeRepr( date, pattern ) {

    const y = date.getFullYear();
    const m = `${date.getMonth() + 1}`.padStart( 2, 0 );
    const d = `${date.getDate()}`.padStart( 2, 0 );
    const H = `${date.getHours()}`.padStart( 2, 0 );
    const M = `${date.getMinutes()}`.padStart( 2, 0 );
    const S = `${date.getSeconds()}`.padStart( 2, 0 );

    if ( pattern === 'YYYY-MM-DD HH:MM:SS' ) {
        return `${y}-${m}-${d} ${H}:${M}:${S}`;
    }

    if ( pattern === 'YYYY-MM-DD' ) {
        return `${y}-${m}-${d}`;
    }

    if ( pattern === 'DD-MM-YYYY' ) {
        return `${d}-${m}-${y}`;
    }

    return "";
}

const oneDayInMillisecs = 24 * 60 * 60 * 1000

function daysDistance( reprFrom, reprTo ) {

    const from = new Date( reprFrom );
    const to = new Date( reprTo );

    return ( to.getTime() - from.getTime() ) / oneDayInMillisecs;
}

function nextDate( reprDate ) {

    const date = new Date( reprDate );

    return new Date( date.getTime() + oneDayInMillisecs );
}

// function rangeToDates( from, to ) {

//     const result = [];

//     from = new Date( from );
//     to = new Date( to );
//     while ( from <= to ) {
//         result.push( timeRepr( from, 'YYYY-MM-DD' ) );
//         from = new Date( from.getTime() + oneDayInMillisecs );
//     }

//     return result;
// }

// function rangeToCounter( from, to ) {

//     from = new Date( from );
//     to = new Date( to );

//     return ( to.getTime() - from.getTime() ) / oneDayInMillisecs;
// }

const isLeapYear = year => {
    year = parseInt( year );
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 );
}

const isLastMonthDay = date => {

    const [ y, d, m ] = date.split( '-' );

    if ( d === '31' && [ '01', '03', '05', '07', '08', '10', '12' ].includes( m ) ) {
        return true;
    }

    if ( d === '31' && [ '04', '06', '09', '11' ].includes( m ) ) {
        return true;
    }

    if ( d === '29' && m === '02' && isLeapYear( y ) ) {
        return true;
    }

   if ( d === '28' && m === '02' ) {
        return true;
    }

    return false;
}

const getLastMonthDay = date => {

    const _ = date.split('-');
    const y = _[ 0 ];
    const m = _[ 1 ];

    if (['01', '03', '05', '07', '08', '10', '12'].includes( m ) ) {
        return '31';
    }

    if ( ['04', '06', '09', '11'].includes( m ) ) {
        return '30';
    }

    if ( m === '02' && isLeapYear( y ) ) {
        return '29';
    }

    if ( m === '02' ) {
        return '28';
    }

    return null;
}

const getPrevMonth = month => {
    const prev = {
        '01': '12',
        '02': '01',
        '03': '02',
        '04': '03',
        '05': '04',
        '06': '05',
        '07': '06',
        '08': '07',
        '09': '08',
        '10': '09',
        '11': '10',
        '12': '11',
    }
    return prev[ month ];
}

const getPrevYear = year => `${parseInt( year ) - 1}` 

const startPeriod30 = date2 => {
    const [ y2, m2, d2 ] = date2.split( '-' );
    const m1 = getPrevMonth( m2 );
    const y1 = m1 < m2 ? y2 : getPrevYear( y2 );
    const d1 = isLastMonthDay( date2 ) ? getLastMonthDay( $`${y1}-${m1}` ) : d2;
    return `${y1}-${m1}-${d1}`;
}

const minDate = dates => {

    let result = dates[ 0 ];
    for ( let date of dates ) {
        if ( date < result ) {
            result = date;
        }
    }
    return result;
}

module.exports = {
    timeRepr,
    // rangeToDates,
    // rangeToCounter,
    daysDistance,
    nextDate,
    startPeriod30,
    minDate
}
