let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let soundBtn = document.querySelector('.sound');
const twitterBtn = document.getElementById('twitter');
const copyBtn = document.getElementById('copy');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('person');
const body = document.body;



// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Copy Quote
function copyQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  navigator.clipboard.writeText(`${quote} - ${author}`);
}
//speechsynthesis of random quotes/data
soundBtn.addEventListener("click",()=>{
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorText.innerText}`);
  speechSynthesis.speak(utterance);
});

const backgroundImages = [
  'bg.jpg',
  'bg2.jpeg',
  'bg3.jpg',
  'bg4.jpeg',
  'bg5.jpeg',
  'bg6.jpg',
  'bg7.jpeg',
  'bg8.jpeg',
  'bg9.jpeg',
  'bg10.jpeg',
  'bg11.jpg',
];

//queryText for background images (Add more for more vaired results).
const queryText = ["motivation", "success", "hardwork", "inspiration"];

btn.addEventListener("click", async () => {
  let url = "";
  let flag = true;
  let pgNum = Math.floor(Math.random() * (4 - 1) + 1);
  let picNum = Math.floor(Math.random() * (10 - 0) + 0);

  url = `https://api.unsplash.com/search/photos?page=${pgNum}&query=${
    queryText[Math.floor(Math.random() * queryText.length)]
  }&orientation=landscape`;
  resStr = ".results[0].urls.full";

  //making rest call to unsplash for fetching images as per keyword
  const fetchImages = async () => {
    const res = await axios.get(url, {
      headers: {
        Authorization: "Client-ID CxQIiufAcwII5UXQuqn0dfm8KAFmJLCeKBBVNcidvUs",
      },
    });
    console.log(res);
    if (flag) {
      console.log(res.data.results[0].urls.full);
      body.style.backgroundImage = `url('${res.data.results[picNum].urls.full}')`;
    } else {
      console.log(res.data.urls.full);
      body.style.backgroundImage = `url('${res.data.urls.full}')`;
    }
  };

  fetchImages();
  const quoteData = await axios.get("https://api.quotable.io/random");
  console.log(quoteData);
  quote.innerText = quoteData.data.content;
  person.innerText = quoteData.data.author;
});
// Tweetquote
twitterBtn.addEventListener('click', tweetQuote);
copyBtn.addEventListener('click', copyQuote);
