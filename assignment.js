let x=23;
let c=0;
for(let i=1;i<=x;++i){
    if(x%i==0){
        c++;
    }
}
if(c==2){
    console.log("Prime");
}else{
    console.log("not prime");
}

