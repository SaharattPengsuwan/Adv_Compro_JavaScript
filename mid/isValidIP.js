function isValidIP(ip) {
    const t = true

    const list_1 = ip.split(".")
    //const list_answer = []
    for (let j of list_1) {
        if (j.toIntegate() > 255) {
            return "false"
        }
    }
    if (list_1.length == 4) {
        for (let i of list_1) {
            if (i.length > 1) {
                if (i[0] == "0"){
                    //list_answer.push("false")
                    return "false"
                }else {
                    //list_answer.push("true")
                    return "true"
                }
            }else if(i.length == 1) {
                if (i == "0")
                //list_answer.push("true")
                return "true"
            }
        }    
    }else {
        //list_answer.push("false")
        return "false"
    }
    //return list_answer
    


}
console.log(isValidIP("1.2.3.01")); // f
console.log(isValidIP("1.2.3.0")); // t
console.log(isValidIP("192.168.10")); // f
console.log(isValidIP("192.168.10.255")); // t
console.log(isValidIP("256.168.256.256")); // f
console.log(isValidIP("192.168.10.255.25")); // f

const list = "1.2.3.04"
const list_2 = list.split(".")

//console.log(list_2[3][0] == "0" && list_2);
//if (list_2[3][])
