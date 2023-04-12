// code your solution here

  function superbowlWin(record) { 
    const foundYear = record.find(({result}) => result === 'W')
    if (foundYear){
  return foundYear.year
    }
    else{
      }
  }