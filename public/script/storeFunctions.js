// Check whether the values are in hexadecimal or not
const ishex = (val) =>{
    for(var i=0; i<val.length; i++){
        if(val[i]<'0' || (val[i]>'9' && val[i]<'A') || val[i]>'F')
            return false;
    }
    return true;
} 
export const mvi = (words, obj,currAddress) =>{
    console.log(currAddress);
    console.log("MVI is going to execute");
    let reg = words[1];
    let val = words[2];
    if(reg.length!=1 || val.length!=2 || !ishex(val)){
    alert("Error while Using MVI , Please correct to continue");
    return 0;
    }
    else{
        currAddress+=2;
        let vall = parseInt(val, 16);
        obj[reg] = vall;
        return currAddress;
    }
}

export const mov = (words, obj,currAddress) =>{
    console.log("MOV is going to execute");
    let args = words[1].split(',');
    
    if(words[1][1]!=',' || args.length!=2 || args[0].length!=1 || args[1].length!=1 || args[0]==args[1]){
    alert("Error while Using MOV , Please correct to continue");
    return 0;
    }
    currAddress+=1;
    let reg1 = args[0];
    let reg2 = args[1];
    // has property to be used
    obj[reg1] = obj[reg2];
    return currAddress;
}
export const sta = (words, obj, currAddress) =>{
    console.log("STA is going to execute");
    let addr = words[1];
    if(addr.length!=4 || !ishex(addr)){ 
        alert("Error while Using STA , Please correct to continue");
        return 0;
    }
    currAddress+=3;
    let addval = parseInt(addr);
    obj.memory[addval] = obj.A;
    console.log(obj.memory[addval]);
    return currAddress;
}