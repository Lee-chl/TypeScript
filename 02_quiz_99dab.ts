function dan(num1:number):void{
    for(let i=1;i<num1+1;i++){
        console.log(`--- ${i}단 ---`);
        for(let j=1;j<10;j++){
            console.log(`${i} X ${j} = ${i * j}`);
        }
    }
}

dan(9);