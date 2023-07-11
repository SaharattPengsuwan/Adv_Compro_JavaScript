const status = 200;

if (status === 200) {
    console.log('OK!');
} else if (status === 400 || status === 500) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

const text = 200;
const message = (status === 200) ? 'OK' : 'ERROR';
console.log(message);