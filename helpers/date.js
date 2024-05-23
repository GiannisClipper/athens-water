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

function rangeToDates( from, to ) {

    const oneDayInMillisecs = 24 * 60 * 60 * 1000
    const result = [];

    from = new Date( from );
    to = new Date( to );
    while ( from <= to ) {
        result.push( timeRepr( from, 'YYYY-MM-DD' ) );
        from = new Date( from.getTime() + oneDayInMillisecs );
    }

    return result;
}

function rangeToCounter( from, to ) {

    const oneDayInMillisecs = 24 * 60 * 60 * 1000
    from = new Date( from );
    to = new Date( to );

    return ( to.getTime() - from.getTime() ) / oneDayInMillisecs;
}

module.exports = {
    timeRepr, 
    rangeToDates,
    rangeToCounter,
}
