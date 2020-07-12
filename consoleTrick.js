const cars = [
    {
        name:'mercedes',
        price:'100000',
        color:'orange'
    },
    {
        name:'BMW',
        price:'120000',
        color:'blue'
    },
    {
        name:'ferrari',
        price:'150000',
        color:'green'
    }
]
const p = document.querySelector('p');

//the regular console print
console.log(p);

//to clear the console
console.clear();

//to show the methods and properties that can be called on an element
console.dir(p);
console.clear();

//to show time taken to perform an async operation
// console.time('fetching the data')
// fetch('https://my-json-server.typicode.com/HAIDER110786/my_fake_server_shoppingCartItems/ShoppingCartItems')
// .then(bufferStream => bufferStream.json())
// .then(() => console.timeEnd('fetching the data'));
// console.clear();

//to show an array in a table format
console.table(cars);
console.clear();


//to group some data together
cars.forEach(car => {
    console.groupCollapsed(`${car.name}`)
    console.log(car.name);
    console.log(car.price);
    console.log(car.color);
    console.groupEnd(`${car.name}`);
})
console.clear();

//to show how many times you use an element
console.count('bond')
console.count('james bond')
console.count('bond')
console.count('james bond')
console.count('bond')
console.count('james bond')
console.count('bond')
console.count('james bond')
console.count('james bond')
console.count('bond')
console.count('bond')
console.count('james bond')
console.count('james bond')
console.count('james bond')
console.clear();

//to print a message as an error
console.error('this is an error message');
console.clear();

//to print a message as a warning
console.warn('this is a warning message');
console.clear();

//to print a message as an information
console.info('this is the info message');
// console.clear();

//printing a styled message
console.log("%c this is the message to be styled","background-color:darkslateblue;font-size:20px")
console.clear();

//printing an interpolated message
console.log('this is the an interpolated message %s',"haider")
console.clear();

//to test/asset a message i.e. to print a message on a false condition
console.assert(p.classList.contains('hello'),'this is the asserted message which only runs when the condition in the first parameter is false');
console.clear();

//show the JS heap size info
console.log(console.memory);
console.clear();
