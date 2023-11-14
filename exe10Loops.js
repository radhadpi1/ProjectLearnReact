
//prints 1 to 10
console.log('prints 1 to 10:')
let array =[]
for (let i = 1; i <= 10; i++) {
    array.push(i)
   }
   console.log(array)

  // prints even numbers from 2 to 20 
  console.log('prints even numbers from 2 to 20 ')
  array =[]
   for (i=2; i<=20; i=i+2) {
    array.push(i)
   }
   console.log(array)
//prints factorial of n
let n =5
let f=1
for(i=1; i<=n; i++){
    f= f*i
}
console.log('factorial of '+n +'='+ f)

//prints astrisk triangle
n =6
for ( i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//calculate sum of all numbers 1 to n
let sum =0
for(i=1;i<=n;i++) {
    sum = sum +i
}
console.log('sum of all numbers 1 to ' + n + ' is: '+ sum)


//a loop that prints the multiplication table of a given number up to 10x.

let tablerow =''
 let tn = 6
for (i =1; i<=10;i++) {
    tablerow=''
    multiple = i*tn
    tablerow =i+' x '+tn +' = '+ multiple
    console.log(tablerow)
    
}


function checkPrime( numberToCheck)
{
    if(numberToCheck == 1) {
        return false;
    }
    for ( i = 2; i*i <= numberToCheck; i++) {
        if (numberToCheck % i == 0) {
            return false;
        }
    }
    return true;
}
 

    let r = 100
    let l = 1
     sum = 0;
    for ( counter = r; counter >= l; counter--) {
 
        // Check for prime
         isPrime = checkPrime(counter);
        if (isPrime) {
 
            // Sum the prime number
            sum = sum + counter;
        }
    }
    console.log(sum)
