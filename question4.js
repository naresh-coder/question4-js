let p = "abcd";
let q = "abcde";



let startTime ;
let endTime

let elapseMilliSecond = (startTime, endTime) => endTime - startTime;


// solution 1
// can alter native we can replace with q.split('') instead of Array.from(q)

startTime  = new Date();
let re = Array.from(q).filter((el) => {
    return p.indexOf(el) == -1;
}).map(el =>{ console.log(el)
  return el});
endTime = new Date();

console.log('time ',elapseMilliSecond(startTime,endTime));

// solution 2
startTime  = new Date();

let map = new Map();
Array.from(p).map(el => map.set(el, null));
Array.from(q).forEach(element => {
    if (!map.has(element)) {
        console.log(element);
    }
});

endTime = new Date();

console.log('time ',elapseMilliSecond(startTime,endTime));
// solution 3 

//console.log(q.split(''));
startTime  = new Date();
let charArry = q.split('');

for (let ch of charArry) {
    if (p.indexOf(ch) == -1) {
        console.log(ch);
        break;
    }
}
endTime = new Date();

console.log('time ',elapseMilliSecond(startTime,endTime));

//console.log(result);

 let alphabet = 'abcdefghijklmnopqrstuvwzyz'.split('');
let countIndex = new Array(26).fill(0);


p.split('').map(ch =>{
  countIndex[alphabet.indexOf(ch)]++;
  console.log('count index ',countIndex);
})



q.split('').map(ch =>{

    countIndex[alphabet.indexOf(ch)]--;
    console.log('count index ',countIndex);
  })


  countIndex.forEach( (el,index) =>{
        if( el != 0){
            console.log(' solution 4 answer ',alphabet[index]) ;
        }

  });