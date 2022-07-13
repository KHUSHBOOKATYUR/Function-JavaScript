// function Count(str)
// {
//   var upper = 0,
//     lower = 0,
//     number = 0,
//     special = 0;
//   for (var i = 0; i < str.length; i++)
//   {
//     if (str[i] >= "A" && str[i] <= "Z") upper++;
//     else if (str[i] >= "a" && str[i] <= "z") lower++;
//     else if (str[i] >= "0" && str[i] <= "9") number++;
//     else special++;
//   }
//   console.log("Upper case letters: " + upper );
//   console.log("Lower case letters : " + lower );
//   console.log("Number : " + number );
//   console.log("Special characters : " + special );
// }
// var str = "KhuShbu@123@12";
// Count(str)

function Count(str)
{
    var upper = 0,
        lower = 0;
    for (var i = 0; i < str.length; i++)
    {
        if (str[i] >= "A" && str[i] <= "Z")( upper++);
        else if (str[i] >= "a" && str[i] <= "z") (lower++);
    }
    console.log("Upper case letters: " + upper );
    console.log("Lower case letters : " + lower );
}
var str = "KhuShbuKhushBUUI";
Count(str)