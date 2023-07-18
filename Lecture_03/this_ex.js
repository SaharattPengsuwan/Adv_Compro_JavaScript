const cat = {
    naem : 'Pipey',
    aga : 8,
    whatName() {
        return this.nama;
    },
};

console.log(cat.whatName());

cat.name = "Hezzar";
console.log(cat.whatName());