export const add = (words, obj) =>{
    console.log("ADD is going to execute");
    let op2 = words[1];
    if(op2.length!=1 ){
         alert("Error while Using ADD, Please correct to continue");
         return 0;
    }
    obj.A += obj[op2];
    return 1;
}

export const sub = (words, obj) =>{
    console.log("SUB is going to execute");
    let op2 = words[1];
    if(op2.length!=1 ){
         alert("Error while Using SUB, Please correct to continue");
         return 0;
    }
    obj.A -= obj[op2];
    return 1;
}

export const adi = (words, obj) =>{
    console.log("ADI is going to execute");
    let op2 = words[1];
    if(op2.length!=2 || !ishex(op2)){
         alert("Error while Using ADI, Please correct to continue");
         return 0;
    }
    obj.A += parseInt(op2);
    return 1;
}
export const inr = (words, obj) =>{
    console.log("INR is going to execute");
    let op2 = words[1];
    if(op2.length!=1){
         alert("Error while Using INR, Please correct to continue");
         return 0;
    }
    obj[op2]++;
    return 1;
}
export const dcr = (words, obj) =>{
    console.log("DCR is going to execute");
    let op2 = words[1];
    if(op2.length!=1){
         alert("Error while Using DCR, Please correct to continue");
         return 0;
    }
    obj[op2]--;
    return 1;
}
