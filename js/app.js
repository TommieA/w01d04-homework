/*
    1.  A paramater is a value that is passed into a function,
        An Argument is what the function receives.
    2.  Console.log logs to the Console, Return ends the function
        and gives a value back to where it was called from.
    3.  The return ends the function, the value cannot be null.


//  checkPalindrome('Borscht');

function checkPalindrome(str) {
    let upperStr = str.toUpperCase();
    let len = str.length;
    for(let i = 0; i < len / 2; i++) {
        let x = (len - 1) - i;
        if(upperStr[i] !== upperStr[x]) {
            return false;
        } else {
            if (i == x) {
                return true;
            };
        };
    };
};

function sumDigits(num) {
    let str = num.toString();
    const arr = str.split(' ');
    let total = 0;
    console.log(arr);
    for(i = 0; i < arr.length; i++) {
        total += arr[i];
        console.log(total, arr[i], i)
    }
    return total;
}

function calculateSide(sideA, sideB) {
    let sideC = ((sideA * sideA) + (sideB * sideB));
    let hypo = Math.sqrt(sideC);
    return hypo;
}

*/