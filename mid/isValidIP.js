function isValidIP(ip) {

    let dot = 0;
    for (let i of ip) {
        if (i == ".") {
            dot++
        }
    }
    if (dot == 3) {
        const list_ip = ip.split(".")
        //console.log(list_ip);
        if (list_ip[0].startsWith("0") || list_ip[1].startsWith("0") || list_ip[2].startsWith("0") || list_ip[3].startsWith("0")){
            console.log("Flase");
        }else {
            console.log("True");
        }
        
        
    }else {
        console.log("Flase");
    }
}

isValidIP("1.2.3.04")
//const ip = "1.2.3.4";
//const list_ip = ip.split(".")
//console.log(list_ip);






