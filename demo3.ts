
function demo():void {
    console.log("0")
}

function demo2():never{
    throw new Error("000")
}

function demo3(name:string,sex:number,...strs:number[]):any{
   console.log(name+sex+strs)
}


function jump(cityname:string):string {
    console.log(cityname)
    return cityname;
}

function jump2(cityname:string='gyz',num?:number):string {
    console.log(cityname)
    return cityname;
}

function jump3(undefined:any,num?:number):string {
    
    return undefined;
}




let jumps:string = demo3('',0,0);