for(let i = 0;i<=10;i++){
    const element = i;
    console.log(element)
}
////////////////////////////////////////////
for(let i = 0;i<=10;i++){
    console.log(`outerloop ${i}`)//jb ye ek bar chalegi to j bali loop 10 bar chalegi tb next i loop chalegi fir 10 bar j then i 3 
    for(j = 0 ; j<=10;j++){
        console.log(`This Innervalue ${j}`)//
    }
    const element = i;
    console.log(i*j)
}