// Check whether the values are in hexadecimal or not
const ishex = (val) =>{
    for(var i=0; i<val.length; i++){
        if(val[i]<'0' || (val[i]>'9' && val[i]<'A') || val[i]>'F')
            return false;
    }
    return true;
} 

export const lda = (words, obj) =>{
    console.log("LDA is going to execute");
    let addr = words[1];
    if(addr.length!=4 || !ishex(addr)){
        alert('Error while Using LDA , Please correct to continue');
        return 0;
    }
    let addval = parseInt(addr);
    if(obj.memory.has(addval)==true) obj.A = obj.memory[addval];
    else obj.A = 0;
    return 1;
}