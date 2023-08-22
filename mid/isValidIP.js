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
        
    }else {
        console.log("Flase");
    }
}

isValidIP("1.2.3.4")
//const ip = "1.2.3.4";
//const list_ip = ip.split(".")
//console.log(list_ip);

