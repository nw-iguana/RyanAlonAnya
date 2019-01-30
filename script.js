/*
Drills 1
*/
function createGreeting(name,age){
    const yearOfBirth = getYearOfBirth(age);


    return `Hi, my name is ${name} and I'm ${age}`;
}

function getYearOfBirth(age) {

    if(age < 0) {
        throw new Error('Age can not be negative');
    }

    return 2019 - age;
}

try {
    const greeting1 = createGreeting("Ryan", 28);
    console.log(greeting1);
} catch(e) {
    console.log(e.message);
}


createGreeting("Ryan",28);


console.log(greeting1);




/*
Drills 2
*/


function jediName(firstName, lastName) {
    return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
  }
  
  console.log(jediName('alon', 'cohen'));
  
  function beyond(num) {
    if (num === infinity || num === -infinity) {
      console.log('And Beyond');
    }
    if (num > 0) {
      console.log('To Infinity');
    }
    if (num < 0) {
      console.log('To negative infinity');
    }
    if (num === 0) {
      console.log('Staying home');
    }
  }
  
  function decode(string) {
    let arr = string.split(' ');
  
    let newArr = arr.map(words => {
      if (words[0] === 'a') {
        return words[1];
      }
      if (words[0] === 'b') {
        return words[2];
      }
      if (words[0] === 'c') {
        return words[3];
      }
      if (words[0] === 'd') {
        return words[4];
      }
      return ' ';
    });
  return newArr.join('');
  }
  
  console.log(decode('craft block argon meter bells brown croon droop'));
  
  function daysInMonth(month, leapYear) {
    let febDays = 28;
    if (leapYear) {
      febDays = 29;
    }
    switch(month) {
      case 'January' :
      return 'January has 31 days';
      break;
      case 'February' :
      return `February has ${febDays} days`;
      break;
      case 'March' :
      return 'March has 31 days';
      break;
      case 'April' :
      return 'April has 30 days';
      break;
      case 'May' :
      return 'May has 31 days';
      break;
      case 'June' :
      return 'June has 30 days';
      break;
      case 'July' : 
      return 'July has 31 days';
      break;
      case 'August' :
      return 'August has 31 days';
      break;
      case 'September' :
      return 'September has 30 days';
      break;
      case 'October' :
      return 'October has 31 days';
      break;
      case 'November' :
      return 'November has 30 days';
      break;
      case 'December' :
      return 'December has 31 days';
      break;
      default :
      return 'This is not a month bro';
    }
  }
  
  console.log(daysInMonth('February', true));
  
  function rockPaperScissors(num) {
    let computerNum = Math.floor(Math.random() * 3) + 1;
    if (num <= 0 || num > 3) {
      throw error ('this is not a valid choice');
    }
    if (num === computerNum) {
      return 'you tied';
    }
    if (num === 1 && computerNum === 2) {
      return 'you lost';
    }
    if (num === 2 && computerNum === 3) {
      return 'you lost';
    }
    if (num === 3 && computerNum === 1) {
      return 'you lost';
    }
    if (num === 2 && computerNum === 1) {
      return 'you win';
    }
    if (num === 3 && computerNum === 2) {
      return 'you win';
    }
    if (num === 1 && computerNum === 3) {
      return 'you win';
    }
  }
  
  console.log(rockPaperScissors(1));