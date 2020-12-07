

var topics = [
    {"Arrays":295},
    {"Dynamic Programming":234},
    {"String": 207},
    {"Math": 192},
    {"Tree": 153},
    {"Dept-first Search": 140},
    {"Hash Table":135},
    {"Greedy":113},
    {"Binary Search": 96},
    {"Breadth-first Search": 77},
    {"Sort": 71},
    {"Two Pointer":66},
    {"Stack": 63},
    {"Backtracking":61},
    {"Design":59},
    {"Bit Manipulation":54},
    {"Graph":48},
    {"Linked List": 42},
    {"Heap": 37},
    {"Union Find":35},
    {"Sliding Window": 26},
    {"Divide and Conquer": 20},
    {"Recursion": 19},
    {"Trie": 18},
    {"Segment Tree": 15},
    {"Ordered Map": 14},
    {"Geometry": 9},
    {"Queue": 9},
    {"Minimax":8},
    {"Binary Indexed Tree": 7},
    {"Brainteaser":7},
    {"Line Sweep": 6},
    {"Random":6},
    {"Topological Sort": 6},
    {"Binary Search Tree": 4},
    {"Rolling Hash": 3},
    {"Dequeue": 2},
    {"Rejection Sampling": 2},
    {"Reservoir Sampling": 2},
    {"Suffix Array": 2},
    {"Memoization":1},
    {"OOP": 1}
];
var companies = [
    {"Google":917},
    {"Amazon": 858},
    {"Facebook":583},
    {"Microsoft":539},
    {"Apple":408},
    {"Bloomberg":382},
    {"Uber":327},
    {"Adobe":262},
    {"Oracle":243},
    {"ByteDance":136},
    {"eBay":136},
    {"LinkedIn": 130},
    {"Goldman Sachs": 129},
    {"Yahoo": 115},
    {"VMware": 103},
    {"Snapchat":93},
    {"Walmart Labs": 86},
    {"Twitter":74},
    {"Cisco":71},
    {"Paypal":68},
    {"Salesforce":66},
    {"Atlassian":60},
    {"Airbnb": 57},
    {"Expedia": 56},
    {"Citadel": 52},
    {"Yandex": 52},
    {"Lyft":48},
    {"Wish": 46},
    {"Mathworks":41},
    {"Qualtrics":41},
    {"Visa":41},
    {"SAP":39},
    {"Roblox":38},
    {"Nutanix":36},
    {"Zillow":34},
    {"ServiceNow":30},
    {"Intuit":29},
    {"Quora":29},
    {"Yelp": 29},
    {"Pinterest":28},
    {"Citrix":27},
    {"Nvidia":27},
    {"Samsung":26},
    {"Capital One":25},
    {"DoorDash": 25},
    {"JPMorgan":25},
    {"Square":25},
    {"Alibaba":24},
    {"Dropbox":24},
    {"Tencent":23},
    {"Wayfair":23},
    {"Akuna Capital":22},
    {"Databricks": 22},
    {"Indeed":22},
    {"Spotify":22},
    {"Morgan Stanley": 21},
    {"Splunk": 21},
    {"Zenefits":21},
    {"Palantir Technologies":20},
    {"Pocket Gems":20},
    {"Robinhood": 20},
    {"Tesla":20},
    {"Audible": 19},
    {"Flipkart":19},
    {"IBM":19},
    {"Coupang":18},
    {"Hulu":18},
    {"Twilio":17},
    {"Two Sigma":17},
    {"Baidu":16},
    {"Grab":16},
    {"Twitch":16}

]

var topicDiscriptions = [
'Arrays are a simple data structure for storing lots of similar items. They exist in all programming languages, and are used as the basis for most other data structures. On their own, Arrays can be used to solve many interesting problems. Arrays come up very often in interview problems'

];



var arrayOfTopics = [];
var arrayOfTopicsStrings = [];


var arrayOfCompany = [];
var arrayOfComanyNames = [];


let parentElement = document.getElementById('bar-container');

let parentElementCompany = document.getElementById('bar-companies');

let counter = 0;

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
  
  
function calculateData(){

    let total = 0;
    let topThree = 0 



    for (let i = 0; i < topics.length; i++) {
        arrayOfTopics.push(Number(Object.values(topics[i])));
        arrayOfTopicsStrings.push(String(Object.keys(topics[i])));
    
        arrayOfCompany.push(Number(Object.values(companies[i])));
        arrayOfComanyNames.push(String(Object.keys(companies[i])));




    }
   topThree =  arrayOfTopics[0] + arrayOfTopics[1] + arrayOfTopics[2];
   console.log(topThree);

total = arrayOfTopics.reduce((a, b)=>{return a+b});


let google = 917 - total;

let percent = Number(((917 / total) * 100).toFixed(0));
console.log(percent);
console.log('Total amount of interview questions that may be asked is 2,365' + total);
console.log('Interesting factor 3 of the main topics make 31% of all the coding problems.');
}




calculateData();


function loop(){

    $('body').show(1000,function () {


        for (let i = 0; i < topics.length; i++) {
            

            ++counter;
        
        
        let valueNumber = document.createElement('div');
        animateValue(valueNumber, 0, arrayOfTopics[i], 2000);
        valueNumber.classList.add('shadow-sm', 'text-center', 'card-tint');
        valueNumber.textContent = arrayOfTopics[i];
        //valueNumber.style.padding = 10 + 'px';
        //valueNumber.style.marginTop = 5 + 'px';
        //valueNumber.style.width = arrayOfTopics[i] / 3 +'%';
        
        
        
        
        if(arrayOfTopics[i] < 20){
            $(valueNumber).css('fontSize', 20);
            
        }else{
            $(valueNumber).css('fontSize', arrayOfTopics[i]);
        }
       
        
       
        $(valueNumber).hide();
        $(valueNumber).fadeIn();
        
        
        let badge = document.createElement('p');
        
        

        
        badge.classList.add('badge-primary', 'display-6', 'd-inline-flex', 'm-4', 'p-5');
        
        //badge.style.width = arrayOfTopics[i] / 5 +'%';
        badge.textContent = arrayOfTopicsStrings[i];
        
        $(parentElement).append(valueNumber, counter,badge);
        
            //company values
            let barCompany = document.createElement('div');
            animateValue(barCompany, 0, arrayOfCompany[i], 3000);
            barCompany.style.fontSize = '40px';
            barCompany.textContent = arrayOfCompany[i];
            //parentElementCompany.append();
            //company names
            let barCompanyNames = document.createElement('p');
            barCompanyNames.classList.add('text-dark');
            barCompanyNames.style.paddingLeft = '30px';
            barCompanyNames.style.fontSize = '30px';
            barCompanyNames.textContent = arrayOfComanyNames[i];
            $(parentElementCompany).append(barCompany, barCompanyNames);
            
        };
        $(parentElementCompany).hide();
        $(parentElementCompany).fadeIn();
        $('footer').show();
    });
    
}

$('body').hide();
    $('footer').hide();
$(document).ready(function () {
    
    loop();
    
});


$('.carousel').carousel({
    interval: 10000
  });
  

    


//console.log(arrayOfTopicsStrings);
//console.log(arrayOfTopics); //the numbers













  //document.getElementById('bar-container').append(unit); 





let num = [1, 2, 5, 10 ,22, 25, 40, 45];
let obBtn = document.getElementById('observeBtn');
$('#observe').hide();


let vals = 0;

$(obBtn).click((e)=>{
++vals;
e.preventDefault();

$('#observe').toggle(500);
if(vals === 1){
    $('.hiddenIf').css('opacity',  0.2);
}
else if(vals === 2){
    $('.hiddenIf').css('opacity',  1);
    vals = 0;
    }

   
});

let isHidden = false;
function hideAlgos(){
  
        $('#x-btn').on('click', (e)=>{

            

            $('#animatedTitle').animate({
                fontSize: 0 + 'px'

            }, 300);
            $('#algos,#complex,.des-complex').slideUp(700);
        });
        return isHidden = true;

}
hideAlgos();
(function(){
    $('#algos,#complex,.des-complex').hide();

    let counter = 0;

    $('#listOfAlgo').on('click',()=>{
       ++counter;
        if(counter){
            $('#animatedTitle').animate({
                fontSize: 36 + 'px'

            }, 300);
            $('#algos').delay(100).show(200);
            $('#complex,.des-complex').delay(100).show(400);
            return isHidden = false;
        }
        

        if(counter === 2 && isHidden === false){
            $('#algos').delay(100).hide(200);
            $('#complex,.des-complex').delay(100).hide(400);
            return counter = 0;
        }
        
        

    });

    


})();




/* 

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(target == array[mid]){
            return mid;
        }else if(target < array[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return false;

}


 */



//console.log(binarySearch(num, 5));


//Time complexity: O(log(n))



//binary search takes in two parameters array to search and target;


//if the target is 5
//   left 0<-- mid 5 -->right 10
// target assigned 5 and the middle is 5 then return 5 as result
//if     5 < 10[mid] ?  :   
//left = first element of the array
//right = last element of the array
// mid = left + right / 2

//divide and Conquer Split method
//if target is not met then remove the lesser

// while left is less then right loop though the array
// middle element is equal to the average of the left + right  
// if target is equal to the array's index which is mid.









const search = (array, target)=>{

    let left = 0;//left is first number
    let right = array.length - 1;  //right is last number
    while (left <= right) {// while the first number is less then then the last number 
        let mid = Math.floor((left + right) / 2);// mid is first number plus last number  get the average
        if(target === array[mid]){// if iterator reaches array index of specified number
            return mid;//return result
        }else if(target < array[mid]){

            // moving right 
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
}

/* const combination = (array) => {
    if(array.length === 0)return [ [] ];
    const firstEl = array[0];
    const combsWithOutFirst = combination(rest);
    const combsWithFirst = [];
    combsWithOutFirst.forEach(comb =>{
        const combWithFirst = [...comb, firstEl];

    })


}

console.log(combination(['a', 'b', 'c'])); */

//predict next price


let trades = Array.from({length: 10}, () => Math.floor(Math.random() * 40));


let buy = ''
console.log(trades);


function predict(trades, index) {

    

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