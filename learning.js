let trades = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

 for (const iterator of trades) {
    console.log(iterator  * -1);
} 
/* 
trades.forEach(a=>{
    console.log(a);
}) */



/* +{
    valueOf:function(){
        return console.log('100') 
    }

} */

let likes = 0;
 if (localStorage.length) {
   likes = localStorage.getItem("likes");
 }
localStorage.setItem("likes", likes);
document.getElementById("likeCounter").textContent = likes;
function likeCount(){


 let c = document.getElementById("likeCounter");
    
    document.getElementById('liked').addEventListener('click', (e)=>{
       e.preventDefault()
      ++likes
       c.textContent = likes;
      localStorage.setItem("likes", likes);
    })
     
}

likeCount();



//https://authenticjobs.com/job/3657/nasdaq-front-end-developer-user-interface/



function predict(trades, buy , sell) {

    
    let oldTrades = trades[0];
    let newTrades = trades[trades.length - 1];
    //console.log(oldTrades);
    //console.log(newTrades);
    /* while (oldTrades <= trades.length) {
        let average = (oldTrades / newTrades) / 2;
        console.log(average);
        return false;
    } */
    return false;

}

predict(trades);



v = [[5, 0]];
console.log(v);



var v = Math.sqrt(-8);
console.log(v);

//Unit Vector always has the magitude of one




    // calcHypotenuse
    function calcHypotenuse(a, b) {
        return (Math.sqrt((a * a) + (b * b)));
      }
      
      // expected output: 1


//linear combination












