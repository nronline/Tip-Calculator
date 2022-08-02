// Arrow function for tip calculator
const tipCalculator = (quality, total) => {
  switch(quality) {
  case 'bad':
    // code block
    return 'tip ' + total / 100 * 5 + '%, wtf bruh!';
    break;
  case 'ok':
    // code block
    return 'tip ' + total / 100 * 15 + '%, not bad!';
    break;
  case 'good':
    // code block
    return 'tip ' + total / 100 * 20 + '%, nice one!';
    break;
  case 'excellent':
    // code block
    return 'tip ' + total / 100 * 30 + '% dope. Party time!'; 
    break;
  default:
    // code block
    return 'tip ' + total / 100 * 18 + '%, meh!';
}
}

//testing
console.log(tipCalculator('bad', 100)) //should return 20
console.log(tipCalculator('ok', 100)) //should return 20
console.log(tipCalculator('good', 100)) //should return 20
console.log(tipCalculator('excellent', 100)) //should return 20
console.log(tipCalculator('hmm', 100)) //should return 20
