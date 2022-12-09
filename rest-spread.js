// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
  
const filterOutOdds = (...args) => {
    return args.filter((num) => num % 2 === 0)
};
console.log(filterOutOdds( 1,2,3,4,5,6,7 ))






const findMin = ((...args) => {
    return Math.min(...args)
})                   
console.log(findMin(1,4,12,-3))





const mergeObjects = ((obj1, obj2) => {
    return { ...obj1, ...obj2}
})
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))





const doubleAndReturnArgs = ((arr, ...args) => {
    return [ ...arr, ...args.map((num) => num * 2) ]
})

console.log(doubleAndReturnArgs([1,2,5],14,4,20,34))





// Slice and Dice!

const removeRandom = ((items) => {
    let randomItem = Math.round(Math.random() * items.length);
    return [...items.slice(0, randomItem), ...items.slice(randomItem, items.length)]
})
console.log(removeRandom([ 1,5,3,17,42,600 ]));




const extend = ((arr1, arr2) => {
    return [...arr1, ...arr2];
})


const addKeyVal = ((obj, key, val) => { 
    let addObj = { ...obj }
    addObj[key] = val;
    return addObj;
})

const removeKey = ((obj, key) => {
    let removeObj = { ...obj };
    delete removeObj[key];
    return removeObj;
})

const combine = ((obj1, obj2) => {
    return { ...obj1, ...obj2};
})

const update = ((obj, key, val) => {
    let updateObj = { ...obj }
    updateObj[key] = val;
    return updateObj
})