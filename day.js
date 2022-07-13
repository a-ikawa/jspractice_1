let day = 'wednesday';
 
switch (day) {
  case 'monday':
    console.log('five days until saturday');
    break;
  case 'tuesday':
    console.log('four days until saturday');
    break;
  case 'wednesday':
    console.log('three days until saturday');
    break;
  case 'thursday':
    console.log('two days until saturday');
    break;
  case 'friday':
    console.log('one days until saturday');
    break;
  case 'saturday': 
    console.log('today is saturday');
    break;
  default:
    console.log(`The correct day is ${day}`);
    break;
}
