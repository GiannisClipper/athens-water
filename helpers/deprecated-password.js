const crypto = require( 'crypto' );

const pass = 'pass';
console.log( 'pass', pass );

const salt = crypto.randomBytes( 4 );
console.log( 'salt', salt );

const saltedPass = salt + pass.toString( 'utf-8' );
console.log( 'saltedPass', saltedPass )

const hash = crypto.createHash( 'sha256' ).update( saltedPass ).digest( 'base64' );
console.log( 'hash', hash );

const saltedHash = salt + hash;
console.log( 'saltedHash', saltedHash )

const base64pass = Buffer.from( saltedHash ).toString( 'base64' )
console.log( 'base64pass', base64pass )

