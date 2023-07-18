const book = {
    isAvailable : false, 
    checkIN : function() {
        this.isAvailable = true;
        return this;
    }
};
console.log( book.checkIN());

function checkIN() {
    return this;
}
console.log( checkIN() ); 