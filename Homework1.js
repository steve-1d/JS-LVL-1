//1. MAKE A CONVERTER

function celsiusToFahrenheit (degree) {
    let result = (degree * 1.8) + 32
    alert(`It's ${Math.ceil(result)}°F.`)
}

function fahrenheitToCelsius (degree) {
    let result = (degree - 32) * 0.5556
    alert(`It's ${Math.round(result)}°C.`)
}


alert (`We are going to convert inserted temperature from Fahrenheit to Celsius and vice versa!`)

let celsiusOrFahrenheit = prompt(`Insert "C" for Celsius to Fahrenheit or "F" for Fahrenheit to Celsius.`);
let degree = +prompt(`Now insert degree.`);

if(celsiusOrFahrenheit == `C` || celsiusOrFahrenheit == `c`) {
    celsiusToFahrenheit(degree)
} else if (celsiusOrFahrenheit == `F` || celsiusOrFahrenheit == `f`){
    fahrenheitToCelsius(degree)
} else {
    alert(`Check the data you inserted above and try again!`)
}

//2. INSERT A NUMBER. CALCULATE PRODUCT AND SUM OF THE DIGITS OF THE NUMBER. IF PRODUCT IS DIVISIBLE BY THE SUM, PRINT THE QUOTIENT, OTHERWISE PRINT THE REMAINDER.

function quotientOrRemainder (number) {

  if (number == 0) {
    return alert (`Cannot calculate!`)}
   
    let sum = 0;
    let temp = number;
    
    while(temp!=0){
     sum += temp % 10;
     temp = Math.floor(temp/10);
    }

    let product = 1;
    let temp1 = number;
    
    while(temp1!=0){
     product *= temp1 % 10;
     temp1 = Math.floor(temp1/10);
    }
  
    if (product % sum == 0) {
        alert(`Quotient is ${product / sum}`)
    } else {
        alert(`Remainder is ${product % sum}`)
    }

}

quotientOrRemainder (1233)
quotientOrRemainder (5)
quotientOrRemainder (0)
quotientOrRemainder (455)

//3. GIVEN A NUMBER n (n>0). PRINT FIBONACCI SERIES UP TO N.

const number = +prompt('Enter the number.');
let n1 = 0; 
let n2 = 1; 
let nextNum;

let temp = ``;

for (let i = 1; i <= number; i++) {
    temp += `${n1},`
        if (n2 < number) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        } else {
        break
        }
}

console.log(temp)

//4. CREATE A FUNCTION THAT TAKES HIS CURRENT [age] AND RETURNS THE GIVEN AGE 20 (OR 21) YEARS, WITH NUMBER BASE IN THE FORMAT SPECIFIED IN THE BELOW EXAMPLES.

//-----

//5. CREATE A FUNCTION THAT TAKES A STRING AS AN ARGUMENT AND RETURNS A CODED (H4CK3R 5P34K) VERSION OF THE STRING.

function changeSymbols (string) {
  
    let symbol1 = 4;
    let symbol2 = 3;
    let symbol3 = 1;
    let symbol4 = 0;
    let symbol5 = 5;
    
      let resultString = ``;
  
      for (let i = 0; i < string.length; i++) {
          if (string[i] == `a`) {
              resultString += symbol1; 
          } else if (string[i] == `e`) {
              resultString += symbol2; 
          } else if (string[i] == `i`) {
              resultString += symbol3; 
          } else if (string[i] == `o`) {
              resultString += symbol4; 
          } else if (string[i] == `s`) {
              resultString += symbol5; 
          } else {
              resultString += string[i];
          }
      }
  return alert (resultString);  
  }
  
  changeSymbols (`javascript is cool`)
  changeSymbols (`programming is fun`)
  changeSymbols (`become a coder`)

//6. CREATE A FUNCTION THAT TAKES THE HEIGHT AND RADIUS OF A CONE AS ARGUMENTS AND RETURNS THE VOLUME OF THE CONE ROUNDED TO THE NEAREST HUNDREDTH.

function volumeOfCone (height, radius) {
    
    let volume = (Math.PI*(Math.pow(radius, 2))*height) / 3;
    
      if (volume == 0) {
          return alert(0)
      } else {
          return alert(`The volume of cone is ${volume}.`)
      }
  }
  
  volumeOfCone (3, 2)
  volumeOfCone (15, 6)
  volumeOfCone (18, 0)