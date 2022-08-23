//BT1
/*console.log('BT1');
const A=[5,4,7,8,10,20,1];
A.sort(
    function(a,b) {return a-b}
    );
console.log(A);*/

//BT2 (C1: sử dụng Arrow)
/*console.log('BT2');
const B=[1,2,'a',{},'b','c',2,4,5];
let C=[];
B.forEach((n)=>{
    if(typeof n==='number') {C.push(n);}
}
);
console.log(C);*/

//BT2 (C2: không sử dụng Arrow)
/*const B=[1,2,'a',{},'b','c',2,4,5];
let C=[];
B.forEach(num);
function num(n) {
    if(typeof n==='number') {C.push(n);
}
}
console.log(C);*/

//BT3 (C1: sắp xếp dãy tăng dần)
/*const D=[1,4,10,100,50,69,96];
D.sort(
    function(a,b) {return a-b}
    );
console.log('min:',D[0]);
console.log('max:',D[D.length-1]);*/

//BT3 (C2: sử dụng math.max(min))
/*const D=[1,4,10,100,50,69,96];
let max=Math.max.apply(null,D);
let min=Math.min.apply(null,D);
console.log('min:',min);
console.log('max:',max);*/

//BT4
/*const E=[1,2,'a','b','c',2,4,5];
E.unshift(E.pop(),E.pop(),E.pop());
console.log(E);*/

//BT5 (C1)
/*const F=[1,23,41,5,6,1,14,66,1124,1,1,55,15,0];
let j=0;
for (i=0;i<F.length;i++) {
    if(F[i]===1) {j=j+1;
    if (j===4) {console.log (i)}
    };
};*/







