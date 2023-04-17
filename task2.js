

// Given an array of integers your solution should find the smallest integer.

//2

function SmallestIntegerFinder (num) {
     

    let key = Math.min(...num)
    console.log(key);
}

SmallestIntegerFinder([34, 15, 88, 2])