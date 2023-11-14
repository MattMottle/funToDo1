// using a for loop print numbers -56 to 1066

// for(let i = -56; i <= 1066; i++) {
//     console.log(i);
// }

// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

// function beCheerful() {
//     for(i=1; i <= 98; i++) {
//         console.log(i + " " + "good morning!");
//     }
// }

// beCheerful();

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// for(i = -300; i <= 0; i+=3) {
//     if(i === -3 || i === -6) {
//     }
//     else {
//         console.log(i);
//     }
// }

// Print integers from 2000 to 5280, using a WHILE.

// let i = 2000
// while( i <= 5280 ) {
//     console.log(i);
//     i++;
// }

//If 2 given numbers represent your birth month and day in either order, 
//log "How did you know?", else log "Just another day...." 

// function birthday(month, day) {
//     let i = 1;
//     let x = 1;
//     for( i = 1; i <= 12; i++) {
//         for(x = 1; x <= 31; x++) {
//             if(month === i && day === x) {
//                 console.log(i + "-" + x + " HOW DID YOU KNOW????")
//             } else {
//                 console.log(i + "-" + x + " Just another day...")
//             }
//         }
//     }
// }
// birthday(3, 12);

// Write a function that determines whether a given year is a leap year. If a year is divisible by four, 
// it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

// function leapYear(year) {
//     if(year % 400 === 0) {
//         return "its a leap year!";
//     }
//     else if(year % 100 === 0) {
//         return "Not a leap year.";
//     }
//     else if(year % 4 === 0) {
//         return "its a leap year!";
//     }
//     else {
//         return "Not a leap year.";
//     }
// }

// console.log(leapYear(100));
// console.log(leapYear(400));
// console.log(leapYear(1990));
// console.log(leapYear(2004));

// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// let i = 512;
// let x = 0;
// while( i <= 4096) {
//     if (i % 5 === 0) {
//         console.log(i);
//         i++;
//         x++;
//     }
//     else {
//         i++;
//     }
// }
// console.log(x);

// Print multiples of 6 up to 60,000, using a WHILE.

// let i = 0
// while( i <= 60000) {
//     if( i % 6 === 0) {
//         console.log(i);
//         i++;
//     }
//     else {
//         i++;
//     }
// }

// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

// for(i = 1; i <= 100; i++) {
//     if (i % 10 === 0) {
//         console.log("Coding Dojo");
//     }
//     else if( i % 5 === 0) {
//         console.log("Coding")
//     }
//     else {
//         console.log(i);
//     }
// }

// Your function will be given an input parameter incoming. Please console.log this value.

// function print(incoming) {
//     console.log(incoming);
// }

// print("guacamole");
// print(2500);

// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

// let i = -300000;
// let x = 0;
// while(i <= 300000) {
//     if(i % 2 === 0) {
//         i++;
//     }
//     else {
//         x += i;
//         console.log(x);
//         i++;
//     }
// }

// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

// let i = 2016;
// while(i >= 1) {
//     if (i % 2 === 0) {
//         console.log(i) 
//         i -= 4
//     }
// }

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from 
// highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).


// function flexibleCountdown(lowNum, highNum, mult) {
//     let i = highNum;
//     while( i >= lowNum && i <= highNum) {
//         if(i % mult === 0) {
//             console.log(i);
//             i--;
//         } else {
//             i--;
//         }
//     }
// }

// flexibleCountdown(2, 9, 3);

//This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially 
//identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, 
//starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. 
//Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and 
//excluding the value 9).

function finalCountdown(mult, lowNum, highNum, skip) {
    let i = lowNum;
    while(i >= lowNum && i <= highNum) {
        if(i === skip) {
            i++;
        }
        else if(i % mult === 0) {
            console.log(i);
            i++;
        } else {
            i++;
        }
    }
}

finalCountdown(3, 5, 17, 9);
