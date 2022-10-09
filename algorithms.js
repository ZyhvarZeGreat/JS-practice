  const linear_search = (list,target) =>{
// Returns the index of the target in the list if found else returns none

for(let i = 0; i < list.length; i++) {
if (list[i].target === target)
{
    return i
}
else {
    return null
}
}
const verify = (index) = ()  =>{
    if (index != null )  {
console.log(`Target found at ${index} `, index)
    }
    else{
        console.log(`Target not at list `)
    }
  }

  const numbers = [1,2,3,4,5,6,7,8,9,10]

  const result = linear_search(numbers,12)
  verify(result)
  }

