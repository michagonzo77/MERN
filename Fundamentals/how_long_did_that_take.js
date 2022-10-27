Number.prototype.isPrime = function() {
    for( let i=2; i<= Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// // recursive
// function rFib( n ) {
//         if ( n < 2 ) {
//             return n;
//         }
//         return rFib( n-1 ) + rFib( n-2 );
//     }
//     rFib(20);
//     // iterative
//     function iFib( n ) {
//         const vals = [ 0, 1 ];
//         while(vals.length-1 < n) {
//             let len = vals.length;
//             vals.push( vals[len-1] + vals[len-2] );
//         }
//         return vals[n];
//     }
//     iFib(20);

// // console.log(rFib(40));
// console.log(iFib(40));

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1)

function reverseString(str) {
    let reversed = "";
    const j = str.length;
    for (let i = j-1; i >= 0; i--){
        reversed = `${reversed}${str[i]}`
    }
    return reversed
}

console.log(reverseString(story))