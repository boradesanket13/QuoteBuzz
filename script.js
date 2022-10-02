let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const twitterBtn = document.getElementById('twitter');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('person');
const body = document.body;

const quotes = [
  {
    quote:
      '"Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite. "',
    person: 'Erik Pevernagie',
    keyword: 'death',
  },

  {
    quote: '"Act first, explain later."',
    person: 'Dan Brown',
    keyword: 'act',
  },

  {
    quote:
      'Life would be a great deal easier if dead things had the decency to remain dead. ',
    person: 'Doug MacLeod',
    keyword: 'death',
  },

  {
    quote:
      '"The best way to find yourself is to lose yourself in the service of others."',
    person: 'Mahatma Gandhi',
    keyword: 'service',
  },

  {
    quote:
      '"If you want to live a happy life, tie it to a goal, not to people or things."',
    person: 'Albert Einstein',
    keyword: '',
  },

  {
    quote:
      '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."',
    person: 'Aristotle',
    keyword: '',
  },

  {
    quote:
      '"Your time is limited, so don\'t waste it living someone else\'s life."',
    person: 'Steve Jobs',
    keyword: '',
  },

  {
    quote:
      '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    person: 'Benjamin Franklin',
    keyword: '',
  },

  {
    quote:
      "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"",
    person: 'Oprah Winfrey',
    keyword: '',
  },

  {
    quote:
      '"it does not matter how slowly you go as long as you do not stop."',
    person: 'Confucius',
    keyword: 'goal',
  },

  {
    quote:
      '"Our lives begin to end the day we become silent about things that matter."',
    person: 'Martin Luther king, Jr.',
    keyword: 'silence',
  },

  {
    quote:
      '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: 'Dalai Lama',
    keyword: 'luck',
  },

  {
    quote: '"The Journey of a thousand miles begins with one step."',
    person: 'lao Tzu',
    keyword: 'journey',
  },

  {
    quote:
      '"But man is not made for defeat. A man can be destroyed but not defeated."',
    person: 'Ernest Hemingway',
    keyword: 'defeat',
  },

  {
    quote:
      '"Let us sacrifice our today so that our children can have a better tomorrow."',
    person: 'A. P. J. Abdul Kalam',
    keyword: 'children',
  },

  {
    quote: '"There is nothing permanent except change."',
    person: 'Heraclitus',
    keyword: 'change',
  },

  {
    quote: '"The Journey of a thousand miles begins with one step."',
    person: 'lao Tzu',
    keyword: 'journey',
  },

  {
    quote: '"There is no charm equal to tenderness of heart."',
    person: 'Jane Austen',
    keyword: 'heart',
  },

  {
    quote:
      '"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."',
    person: 'lao Tzu',
    keyword: 'mind',
  },

  {
    quote: '"Learning never exhausts the mind."',
    person: 'Leonardo da Vinci',
    keyword: 'learning',
  },

  {
    quote:
      '"Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."',
    person: 'Francis of Assisi',
    keyword: 'peace',
  },

  {
    quote:
      '"Life without love is like a tree without blossoms or fruit."',
    person: 'Khalil Gibran',
    keyword: 'love',
  },

  {
    quote:
      '"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."',
    person: 'William Blake',
    keyword: 'day',
  },

  {
    quote:
      '"Good judgment comes from experience, and a lot of that comes from bad judgment."',
    person: 'Will Rogers',
    keyword: 'experience',
  },

  {
    quote:
      '"Keep your face always toward the sunshine - and shadows will fall behind you."',
    person: 'Walt Whitman',
    keyword: 'sunshine',
  },

  {
    quote:
      '"The supreme art of war is to subdue the enemy without fighting."',
    person: 'Sun Tzu',
    keyword: 'war',
  },

  {
    quote: '"Independence is happiness."',
    person: 'Susan B. Anthony',
    keyword: 'independence',
  },

  {
    quote:
      '"Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak."',
    person: 'Thomas Carlyle',
    keyword: 'presistence',
  },

  {
    quote:
      '"If you cannot do great things, do small things in a great way."',
    person: 'Napoleon Hill',
    keyword: 'greatness',
  },

  {
    quote:
      '"It is far better to be alone, than to be in bad company."',
    person: 'George Washington',
    keyword: 'lonely',
  },

  {
    quote:
      "\"Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.\"",
    person: 'Satchel Paige',
    keyword: 'dance',

  },

  {
    quote:
      '"Love cures people - both the ones who give it and the ones who receive it."',
    person: 'Karl A. Menninger',
    keyword: 'love',
  },

  {
    quote: '"Love has no age, no limit; and no death."',
    person: 'John Galsworthy',
    keyword: 'love',
  },

  {
    quote: '"Happiness can exist only in acceptance."',
    person: 'George Orwell',
    keyword: 'happiness',
  },

  {
    quote: '"Happiness can exist only in acceptance."',
    person: 'George Orwell',
    keyword: 'happiness',
  },

  {
    quote: '"Being entirely honest with oneself is a good exercise."',
    person: 'Sigmund Freud',
    keyword: 'honest',
  },

  {
    quote:
      '"Keep your face always toward the sunshine - and shadows will fall behind you."',
    person: 'Walt Whitman',
    keyword: 'sunshine',
  },

  {
    quote:
      '"Change your life today. Don\'t gamble on the future, act now, without delay."',
    person: 'Simone de Beauvoir',
    keyword: 'life',
  },

  {
    quote:
      '"Coming together is a beginning; keeping together is progress; working together is success."',
    person: 'Edward Everett Hale',
    keyword: 'success',
  },

  {
    quote:
      '"God gave us the gift of life; it is up to us to give ourselves the gift of living well."',
    person: 'Voltaire',
    keyword: 'life',
  },

  {
    quote:
      '"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."',
    person: 'Samuel Beckett',
    keyword: 'failure',
  },

  {
    quote:
      '"There are two ways of spreading light: to be the candle or the mirror that reflects it."',
    person: 'Edith Wharton',
    keyword: 'light',
  },

  {
    quote:
      '"A new command I give you: Love one another. As I have loved you, so you must love one another."',
    person: 'Jesus Christ',
    keyword: 'love',
  },

  {
    quote:
      '"The best preparation for tomorrow is doing your best today."',
    person: 'H. Jackson Brown, Jr.',
    keyword: 'today',
  },

  {
    quote: '"Honesty is the first chapter in the book of wisdom."',
    person: 'Thomas Jefferson',
    keyword: 'wisdom',
  },

  {
    quote:
      '"There is only one corner of the universe you can be certain of improving, and that\'s your own self."',
    person: 'Aldous Huxley',
    keyword: 'universe',
  },

  {
    quote: '"There are no traffic jams along the extra mile."',
    person: 'Roger Staubach',
    keyword: 'traffic',
  },
  {
    quote: '"It is never too late to be what you might have been."',
    person: 'George Eliot',
    keyword: 'time',
  },
  {
    quote: '"You become what you believe."',
    person: 'Oprah Winfrey',
    keyword: 'believe',
  },
  {
    quote: '"I would rather die of passion than of boredom."',
    person: 'Vincent van Gogh',
    keyword: 'passion',
  },
  {
    quote:
      '"A truly rich man is one whose children run into his arms when his hands are empty."',
    person: 'Unknown',
    keyword: 'rich',
  },
  {
    quote:
      '"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."',
    person: 'Ann Landers',
    keyword: 'children',
  },
  {
    quote:
      '"If you want your children to turn out well, spend twice as much time with them, and half as much money."',
    person: 'Abigail Van Buren',
    keyword: 'children',
  },
  {
    quote:
      '"Build your own dreams, or someone else will hire you to build theirs."',
    person: 'Farrah Gray',
    keyword: 'dream',
  },
  {
    quote:
      '"The battles that count are the ones for gold medals. The struggles within yourself, the invisible battles inside all of us that is where it is at."',
    person: 'Jesse Owens',
    keyword: 'battles',
  },
  {
    quote: '"Education costs money. But then so does ignorance."',
    person: 'Sir Claus Moser',
    keyword: 'money',
  },
  {
    quote:
      '"I have learned over the years that when ones mind is made up, this diminishes fear."',
    person: 'Rosa Parks',
    keyword: 'courage',
  },
  {
    quote:
      '"It does not matter how slowly you go as long as you do not stop."',
    person: 'Confucius',
    keyword: 'travel',
  },
  {
    quote:
      '"If you look at what you have in life, you will always have more. If you look at what you don\'t have in life, you will never have enough."',
    person: 'Oprah Winfrey',
    keyword: 'life',
  },
  {
    quote:
      '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: 'Dalai Lama',
    keyword: 'luck',
  },
  {
    quote:
      '"You cannot use up creativity.  The more you use, the more you have."',
    person: 'Maya Angelou',
    keyword: 'creativity',
  },
  {
    quote: '"Dream big and dare to fail."',
    person: 'Norman Vaughan',
    keyword: 'dream',
  },

  {
    quote:
      '"All behavior is driven by the desire to solve a problem. Sometimes the problem is that you notice something good and you want to obtain it. Sometimes the problem is that you are experiencing pain and you want to relieve it. Either way, the purpose of every habit is to solve the problems you face."',
    person: 'James Clear',
    keyword: 'problem',
  },
  {
    quote:
      '"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."',
    person: 'Roy T. Bennett',
    keyword: 'attitude',
  },
  {
    quote:
      '"Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart."',
    person: ' Roy T. Bennett',
    keyword: 'fear',
  },
  {
    quote:
      '"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine."',
    person: ' Roy T. Bennett',
    keyword: 'brave',
  },
  {
    quote:
      '"The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward."',
    person: 'Steve Maraboli',
    keyword: 'forgive',
  },
  {
    quote:
      '"Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others."',
    person: 'Roy T. Bennett',
    keyword: 'dream',
  },
  {
    quote:
      '"Success is not how high you have climbed, but how you make a positive difference to the world."',
    person: 'Roy T. Bennett',
    keyword: 'success',
  },
  {
    quote:
      '"Everything can be taken from a man but one thing: the last of the human freedoms—to choose one\'s attitude in any given set of circumstances, to choose one’s own way."',
    person: 'Viktor E. Frankl',
    keyword: 'freedom',
  },
  {
    quote:
      'Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.',
    person: 'Steve Maraboli',
    keyword: 'destiny',
  },
  {
    quote:
      '"It\'s not how much we have, but how much we enjoy, that makes happiness."',
    person: 'Charles Spurgeon',
    keyword: 'happiness',
  },
  {
    quote:
      'There are many opportunities every single day and Monday is a perfect opportunity to size them all.',
    person: 'Steve Maraboli',
    keyword: 'day',
  },
  {
    quote:
      '"trust in the Lord with all your heart and lean not in your own understanding."',
    person: 'Proverbs 3:5',
    keyword: 'god',
  },
];

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

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


btn.addEventListener('click', () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  //let randomImage = Math.floor(Math.random() * backgroundImages.length);
  let url = ''
  let flag = true
  if (quotes[randomQuote].keyword === '' || quotes[randomQuote].keyword === null ){
    url = 'https://api.unsplash.com/photos/random?orientation=landscape'
    flag = false
  }
  else{
    url = 'https://api.unsplash.com/search/photos?page=1&query='+quotes[randomQuote].keyword+'&orientation=landscape'
    resStr = '.results[0].urls.full'
  }
  //making rest call to unsplash for fetching images as per keyword
  const fetchImages = async () => {
    const res = await axios.get(
      url,
      {
        headers: {
          'Authorization': 'Client-ID CxQIiufAcwII5UXQuqn0dfm8KAFmJLCeKBBVNcidvUs'
        }
      }
    );
    if(flag){
      console.log(res.data.results[0].urls.full)
      body.style.backgroundImage = `url('${res.data.results[0].urls.full}')`;
    }else{
      console.log(res.data.urls.full)
      body.style.backgroundImage = `url('${res.data.urls.full}')`;
    }
    
  };
  
  quote.innerText = quotes[randomQuote].quote;
  person.innerText = quotes[randomQuote].person;
  fetchImages()
});
twitterBtn.addEventListener('click', tweetQuote);
