// Put your solution here

function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    for (let item of numbers) {
        if (item % 2 == 0) {
            evenNums.push(item);
        } else {
            oddNums.push(item);
        }
    }

    evenNums.sort(
        function(a, b) {
            return a - b;
        }
    )

    oddNums.sort(
        function(a, b) {
            return a - b;
        }
    )

    console.log("Even numbers:")
    if (evenNums.length == 0) {
        console.log("None");
    }
    for (i = 0; i < evenNums.length; i++) {
        console.log(evenNums[i]);
    }
    console.log("Odd numbers:")
    if (oddNums.length == 0) {
        console.log("None");
    }
    for (i = 0; i < oddNums.length; i++) {
        console.log(oddNums[i]);
    }
}

let nums = [4, 2, 9, 1, 8];
divideArray(nums)

/*
hint:

let evenNums = [];
let oddNums = [];
function divedeArr(numbers)
{
    for (let item of numbers){
        if (item % 2 == 0){
            evenNums push(item);
        }
        else{
            oddNums push(item);
        }
    }
}

even sorting
evenNums.sort(
    function(a, b){
        return a - b;
    }
)

do same for odds
oddNums.sort(
    function(a, b){
        return a - b;
    }
)

print values from above

*/