function getBudgets(data){

    total_number = 0
    for (let i of data) {
        console.log(i.budget);
        total_number += i.budget
    }
    console.log(total_number);

}

    



getBudgets([
{name: "John", age: 21, budget: 23000},
{name: "John", age: 21, budget: 23000},
{name: "John", age: 21, budget: 23000},])