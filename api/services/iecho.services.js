const { formatResponse } = require('./responses.services')

exports.reverseText = (text) => {
  try {
    const reversed = text.split('').reverse().join('')
    console.log('reversed: ', reversed)
    const palindrome = isPalindrome(text, reversed)
    return formatResponse({ text: reversed, palindrome })
  } catch (error) {
    console.log('error: ', error)
    return formatResponse({ error: 'oops' }, false)
  }
}

/**
 * check if the cleared version of strings are a palindrome
 * @param {String} original
 * @param {String} reversed
 */
function isPalindrome (original, reversed) {
  const cleanOriginal = purgeString(original)
  const cleanReversed = purgeString(reversed)
  return cleanReversed === cleanOriginal
}

/**
 * purge from white spaces and other chars
 * @param {String} str
 */
function purgeString (str = '') {
  return (
    str &&
    str
      .normalize('NFD')
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s\s+/g, ' ')
  )
}
