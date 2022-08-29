//BT1
/*var user={
    name:'Hieu',
    age:18,
    appearence:{
        hairColor:'black',
        skinColor:'yellow',
        height:1700,
        weight:68
    }
}
function getKeys(object,result=[]){
    let keys= result;
    for(let key in object){
        keys.push(key);
        if (typeof object[key]==='object'){
            getKeys(object[key],result)// hoac getKeys(object[key],keys) muc dich o day la de keys van = result =[]
        };
        console.log(keys);
    }
}
getKeys(user);*/

//BT2
const A=[21,4,5,-1];
A.splice(3,0,99);
console.log(A);