

let likes = 0;
if (localStorage.length) {
  likes = localStorage.getItem("likes");
}
localStorage.setItem("likes", likes);
document.getElementById("likeCounter").textContent = likes;
function likeCount() {
  let c = document.getElementById("likeCounter");

  document.getElementById("liked").addEventListener("click", (e) => {
    e.preventDefault();
    ++likes;
    c.textContent = likes;
    localStorage.setItem("likes", likes);
  });
}

likeCount();

function toggleCards() {
  let id = 1;
  let showCards = document.getElementById("toggle-card-header");

  showCards.addEventListener("click", (e) => {
    let x = document.getElementById(`heading${id}`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });

  /*   showCards.style.display = 'none'; */
}
toggleCards();
//https://authenticjobs.com/job/3657/nasdaq-front-end-developer-user-interface/

function predict(trades, buy, sell) {
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
  return Math.sqrt(a * a + b * b);
}

// expected output: 1

//linear combination
