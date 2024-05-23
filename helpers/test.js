const { rangeToDates, rangeToCounter } = require( './date.js' ); 

console.log( rangeToDates( '2024-04-30', '2023-05-01' ) );
console.log( rangeToDates( '2024-04-30', '2024-05-01' ) );
console.log( rangeToDates( '2024-04-30', '2024-05-03' ) );
console.log( rangeToCounter( '2024-04-30', '2024-05-03' ) );
console.log( rangeToCounter( '2024-05-30', '2024-05-03' ) );