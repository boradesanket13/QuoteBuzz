let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let soundBtn = document.querySelector('.sound');
const backBtn = document.getElementById('back')
const twitterBtn = document.getElementById('twitter');
const copyBtn = document.getElementById('copy');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('person');
const cont1 = document.getElementById('container1');
const cont2 = document.getElementById('auth-profile');
const cont3 = document.getElementById('container3');
const topic = document.getElementById('3');
const tag_cont = document.getElementById('tags-cont')
const body = document.body;


//go back 
const back = () => {
  cont1.style.display = 'block';
  cont2.style.display = 'none';
} 


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
//speechsynthesis of Quotes
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
  let slug = '';
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
  slug = quoteData.data.authorSlug;
  console.log(slug);
  const authdata = await axios.get(`https://api.quotable.io/authors?slug=${slug}`);
  const data = authdata.data.results[0];
  console.log(data);

  person.addEventListener('click', async () => {
    cont1.style.display = 'none';
    cont2.style.display = 'block';
    
    const name = document.getElementById('auth-name');
    const bio = document.getElementById('auth-bio');
    const link = document.getElementById('auth-link');
    const quote = document.getElementById('auth-quote');

    name.innerText = data.name;
    bio.innerText = data.bio;
    link.innerText = data.link;
    link.href = data.link;
    quote.innerText = data.quoteCount
  })
});

// const authProfile = (id) => {
//   console.log(id);
// }

// Tweetquote

twitterBtn.addEventListener('click', tweetQuote);
copyBtn.addEventListener('click', copyQuote);

function linkClick(id){
  const clicked = document.getElementById(id);
  if(!clicked.classList.contains('active')){
    const active = document.getElementsByClassName('active');
    Array.from(active).forEach(element => {
      element.classList.remove('active');
      // console.log(element);
    });
    // console.log(active);
    clicked.classList.add('active');
    clicked.style.transitionTimingFunction="ease-out";
    clicked.style.transitionDuration=".3s"

    
    if(id === 3){
      cont3.style.display = 'block';
      cont1.style.display = 'none';
      cont2.style.display = 'none';
    }
    else if(id === 1){
      cont1.style.display = 'block';
      cont2.style.display = 'none';
      cont3.style.display = 'none';
    }
  }
}

topic.addEventListener('click', async () => {
  const tagsdata = await axios.get("https://api.quotable.io/tags");
  console.log(tagsdata);
  tag_cont.innerHTML = '';

  adder='';
  tagsdata.data.forEach(tag => {
    adder+=`
    <div className="tag">
      <div className="tagName">${tag.name}</div>
    </div>
    `
  })
  tag_cont.innerHTML = adder;


});

function OnChange(){
  let url = "";
  let flag = true;
  let pgNum = Math.floor(Math.random() * (4 - 1) + 1);
  let picNum = Math.floor(Math.random() * (10 - 0) + 0);

  url = `https://api.unsplash.com/search/photos?page=${pgNum}&query=${
    queryText[Math.floor(Math.random() * queryText.length)]
  }&orientation=landscape`;
  resStr = ".results[0].urls.full";
  const fetchImages = async () => {
    const res = await axios.get(url, {
      headers: {
        Authorization: "Client-ID CxQIiufAcwII5UXQuqn0dfm8KAFmJLCeKBBVNcidvUs",
      },
    });
    if (flag) {
      body.style.backgroundImage = `url('${res.data.results[picNum].urls.full}')`;
    } else {
      console.log(res.data.urls.full);
      body.style.backgroundImage = `url('${res.data.urls.full}')`;
    }
  };

  fetchImages();

  var x=document.getElementById("person").value;
  const api_url = `https://api.quotable.io/random?author=${x}`;
 
  async function getapi(url) {
    const response = await fetch(url);
    var quoteData = await response.json();
    quote.innerText = quoteData.content;
    person.innerText = quoteData.author;
}
getapi(api_url);
}