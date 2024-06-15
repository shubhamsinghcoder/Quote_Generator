

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweetQuote = document.getElementById("Tweet");

const api_url = "https://api.quotable.io/random";

async function getquote(url){
  const response = await fetch(url);
  var data = await response.json();
  // console.log(data);
  quote.innerHTML =  data.content;
  author.innerHTML = data.author;
}

newQuote.addEventListener('click',()=>{
  getquote(api_url);
})

getquote(api_url);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML,"Tweet window","width=600, height=300")
}

tweetQuote.addEventListener('click',()=>{
  tweet();
})