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

