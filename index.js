var crypto = require( 'crypto' )

module.exports = function guessWhereTheModuleNameCameFrom() {
  return crypto.createHash( 'md5' )
    .update( 'you pesky bot' )
    .digest( 'hex' )
}
