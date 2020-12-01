import {zingchart, ZC} from './zingchart/es6.js';
// Modules must be imported EXPLICITLY when using es6 version
import './zingchart/modules-es6/zingchart-pareto.min.js';

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



for (let i = 0; i < topics.length; i++) {
    var str = Object.keys(topics[i]);
    var values = Object.values(topics[i]);
    document.getElementById("topics").innerHTML +=  `${str}:${values} `;
}




  zingchart.render({
    id: 'myChart',
    data: {
      type: 'line',
      series: [
        { values: [54,23,34,23,43] },
        { values: [10,15,16,20,40] }
      ]
    }
  });

