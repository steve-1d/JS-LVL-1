https://edabit.com/challenge/eJ8vzsdDcKNy97Kbu
// 1.

https://edabit.com/challenge/Bd2jQS9xA6QecB34h
// 2.

function collectLetters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = [i];
    } else {
      obj[str[i]].push(i);
    }
  }
  return obj
}

console.log(collectLetters(`hello`))

https://edabit.com/challenge/aZiwEFEdFvWoBvDWS
//3.

https://edabit.com/challenge/7DiEaqrnap9DDXnSo
// 4.

function twentyFiveOnOne(cart) {

  let total = 0;
  let prices = [];

  for(var i=0; i<cart.length; i++){
    let pricePerItem = cart[i].price;
    let totalPrice = pricePerItem * cart[i].quantity
    prices.push(pricePerItem);
    total += totalPrice;
  }

  let maxPrice = Math.max(...prices)
  let discount = maxPrice * 0.25;
  total -= discount;
  
  return Number(total.toFixed(2)); 
}
  
console.log(twentyFiveOnOne([
{ name: "Iphone 20x", quantity: 1, price: 1350 },
{ name: "Samsung x30", quantity: 1, price: 1225 },
{ name: "Nokia 9250", quantity: 1, price: 800 },
{ name: "Tesla Model Y", quantity: 1, price: 72999 }
]))

https://edabit.com/challenge/kageRYgvDLvXAw7As
// 5.

  const weeklySalary = hours => hours.reduce((total, hours, i) => {
	let baseHours = hours * 10;
	let overTime = (hours > 8) ? (hours - 8) * 5 : 0;
	let weekendBonus = (i > 4) ? 2 : 1;
	return total + (baseHours + overTime) * (weekendBonus);
}, 0);

console.log(weeklySalary([8, 8, 8, 0, 0, 10, 12]))

https://edabit.com/challenge/XR4suWJok9wdaNJ5j
// 6.