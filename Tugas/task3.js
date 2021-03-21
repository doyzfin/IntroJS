function printSegitiga(num){
    if (typeof num === 'number'){
        let l = '';
        for (i = num; i > 0 ; i --){
            for(j = 1; j <= i; j++){
                l += j;
            }
            l += `\n`  
        }
        console.log(l)
        return l; 
    } else {
      console.log("Data harus number")
    }

}
printSegitiga(5);