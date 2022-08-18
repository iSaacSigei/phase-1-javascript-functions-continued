// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('go swimming');

//function expression
function mondayWork(activity= 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork('go to movies')

//function wrapAdjective
function wrapAdjective(visualFlair = "*"){
    return function(adjective = "special"){
      return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
  }
  wrapAdjective("*")("a dedicated programmer")
