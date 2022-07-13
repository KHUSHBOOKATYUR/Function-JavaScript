function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));







// const tips_toPairs = obj =>
//   obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
//     ? Array.from(obj.entries())
//     : Object.entries(obj);
// console.log(tips_toPairs({ x: 1, y: 2 })); 
// console.log(tips_toPairs([2, 4, 8])); 
// console.log(tips_toPairs('shy')); 
// console.log(tips_toPairs(new Set(['x', 'y', 'z', 'x'])));


// Output:

// [["x", 1], ["y", 2]]
// [[0, 2], [1, 4], [2, 8]]
// [["0", "s"], ["1", "h"], ["2", "y"]]
// [["x", "x"], ["y", "y"], ["z", "z"]]

 

    

