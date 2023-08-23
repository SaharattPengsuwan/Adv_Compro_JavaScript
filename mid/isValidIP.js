function isValidIP(ip) {

    let dot = 0;
    for (let i of ip) {
        if (i == ".") {
            dot++
        }
    }
    const list_ip_1 = ip.split(".");
    
    if ((list_ip_1[0].length == 1 && list_ip_1[0][0] == "0") || (list_ip_1[1].length == 1 && list_ip_1[2][0] == "0") ||(list_ip_1[2].length == 1 && list_ip_1[2][0] == "0") ||(list_ip_1[3].length == 1 && list_ip_1[3][0] == "0")) {
        dot++
    }
    if (dot == 4) { 
        const list_ip = ip.split(".")
        //console.log(list_ip);
        if (list_ip[0].startsWith("0") || list_ip[1].startsWith("0") || list_ip[2].startsWith("0") || list_ip[3].startsWith("0")){
            console.log("Flase");
        }if (list_ip[0].length == 1 || list_ip[1].length == 1 || list_ip[2].length == 1 || list_ip[3].length == 1) {
            console.log("True");
        }
        
    }else {
        console.log("Flase");
    }
}

//isValidIP("1.2.3.04")
isValidIP("192.168.1.0")
const ip = "1.2.3.4";

const list_ip = ip.split(".")
//console.log(list_ip);
//console.log(list_ip[0].length);

const name = "saharatt";
//console.log(name.length);




