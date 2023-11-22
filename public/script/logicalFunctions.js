export const cma = (words, obj) =>{
    console.log("CMA is going to execute");
    var binary = obj.A.toString(2);
    let comp = "";
    for(var i=0; i<binary.length; i++)
        if(binary[i]=='1') comp = comp + "0";
        else comp = comp + "1";
    console.log(`Complement: ${comp}`);
    while(comp.length<8) comp = "1" + comp;
    obj.A = parseInt(comp, 2);
}

export const cmp = (words, obj) =>{
    console.log("CMP is going to execute");
    var op2 = words[1];
    if(op2.length!=1 || obj.has(op2)==false){
       alert("Error while Using MVI , Please correct to continue");
       return 0;
    }
    if(obj[A] - obj[op2]>0){
        obj.S=0; obj.CY=0; obj.Z=0;
    }else if(obj[A] - obj[op2]==0){
        obj.S=0; obj.CY=0; obj.Z=1;
    }else{
        obj.S=1; obj.CY=1; obj.Z=0;
    }
    return 1;
}