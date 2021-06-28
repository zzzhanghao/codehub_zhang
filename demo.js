
var validateStackSequences = function(pushed, popped) {
  var stack = []
  var index = 0
  for(let i of pushed) {
      stack.push(i)
      while(stack[stack.length - 1] == popped[index] && stack.length !== 0){
          stack.pop()
          index++
          console.log(index);
      }
  }
  if(index == popped.length-1) return true
  return false

};



console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]));
