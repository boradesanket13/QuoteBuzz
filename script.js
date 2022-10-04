let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const twitterBtn = document.getElementById('twitter');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('person');
const body = document.body;

const quotes = [
  {
    quote:'“All our dreams can come true, if we have the courage to pursue them.” ',
    person:'Walt Disney'
  },
  {
    quote:'“The secret of getting ahead is getting started.” ',
    person:'Mark Twain'
  },
  {
    quote:'“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.” ',
    person:'Michael Jordan'
  },
  {
    quote:'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. ',
    person:'Mary Kay Ash'
  },
  {
    quote:'“The best time to plant a tree was 20 years ago. The second best time is now.” ',
    person:'Chinese Proverb'
  },
  {
    quote:'"Only the paranoid survive" ',
    person:'Andy Grove'
  },
  {
    quote:'“It’s hard to beat a person who never gives up.”',
    person:'Babe Ruth'
  },
  {
    quote:'““I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’”',
    person:'Leah Busque'
  },
  {
    quote:'“If people are doubting how far you can go, go so far that you can’t hear them anymore.” ',
    person:'Michele Ruiz'
  },
  {
    quote:'“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.”',
    person:'Arianna Huffington'
  },
  {
    quote:'“Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.” ',
    person:'Joss Whedon'
  },
  {
    quote:'“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.”',
    person:'William W. Purkey'
  },
  {
    quote:'“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”',
    person:'Neil Gaiman'
  },
  {
    quote:'“Everything you can imagine is real.”',
    person:'Pablo Picasso'
  },
  {
    quote:'“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”',
    person:'Helen Keller'
  },
  {
    quote:'“Do one thing every day that scares you.”',
    person:'Eleanor Roosevelt'
  },
  {
    quote:'“It’s no use going back to yesterday, because I was a different person then.”',
    person:'Lewis Carroll'
  },
  {
    quote:'“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” ',
    person:'Socrates'
  },
  {
    quote:'“Happiness is not something ready made. It comes from your own actions.” ',
    person:'Dalai Lama XIV'
  },
  {
    quote:'“Whatever you are, be a good one.” ',
    person:'Abraham Lincoln'
  },
  {
    quote:'“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” ',
    person:'Unknown'
  },
  {
    quote:'“If we have the attitude that it’s going to be a great day it usually is.”',
    person:'Catherine Pulsifier'
  },
  {
    quote:'“Impossible is just an opinion.” ',
    person:'Paulo Coelho'
  },
  {
    quote:'“Your passion is waiting for your courage to catch up.”',
    person:'Isabelle Lafleche'
  },{
    quote:'“Magic is believing in yourself. If you can make that happen, you can make anything happen.”',
    person:'Johann Wolfgang Von Goethe'
  },{
    quote:'“If something is important enough, even if the odds are stacked against you, you should still do it.” ',
    person:'Elon Musk'
  },{
    quote:'“Don’t be afraid to give up the good to go for the great.”',
    person:'John D. Rockefeller'
  },{
    quote:'“It’s Monday … time to motivate and make dreams and goals happen. Let’s go!” ',
    person:'Heather Stillufsen'
  },{
    quote:'“It was a Monday and they walked on a tightrope to the sun.”',
    person:'Marcus Zusak'
  },{
    quote:'“Goodbye, blue Monday.”',
    person:'Kurt Vonnegut'
  },{
    quote:'“So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more positive partnership.”',
    person:'Julio-Alexi Genao'
  },
  {
    quote:'“When life gives you Monday, dip it in glitter and sparkle all day.”',
    person:'Ella Woodword'
  },
  {
    quote:'“Oh! It’s Friday again. Share the love that was missing during the week. In a worthy moment of peace and bliss.”',
    person:'S. O’Sade'
  },
  {
    quote:'Friday sees more smiles than any other day of the workweek!',
    person:'Kate Summers'
  },
  {
    quote:'“Every Friday, I like to high five myself for getting through another week on little more than caffeine, willpower, and inappropriate humor.”',
    person:'Nanea Hoffman'
  },
  {
    quote:'“When you leave work on Friday, leave work. Don’t let technology follow you throughout your weekend (answering text messages and emails). Take a break. You will be more refreshed to begin the workweek if you have had a break.”',
    person:'Catherine Pulsifer'
  },
  {
    quote:'“Make Friday a day to celebrate work well done that you can be proud of knowing that you just didn’t put in time to the next paycheck.”',
    person:'Byron Pulsifer'
  },
  {
    quote:'“I challenge you to let every day be a Friday. Permit yourself to be happy every day.” ',
    person:'Joel Osteen'
  },
  {
    quote:'“This Friday, finish your work and be done. Look forward to the weekend and have some fun!”',
    person:'Kate Summers'
  },
  {
    quote:'“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”',
    person:'Aristotle'
  },
  {
    quote:'“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.”',
    person:'Sheryl Sandberg'
  },
  {
    quote:'“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.”',
    person:'Marissa Mayer'
  },
  {
    quote:'“If you hear a voice within you say, ‘You cannot paint,’ then by all means paint, and that voice will be silenced.”',
    person:'Vincent Van Gogh'
  },
  {
    quote:'“How wonderful it is that nobody need wait a single moment before starting to improve the world.”',
    person:'Anne Frank'
  },
  {
    quote:'“Some people want it to happen, some wish it would happen, others make it happen.” ',
    person:'Michael Jordan'
  },
  {
    quote:'“If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.”',
    person:'Simon Sinek'
  },
  {
    quote:'“Very often, a change of self is needed more than a change of scene."',
    person:'A.C. Benson'
  },
  {
    quote:'“Leaders can let you fail and yet not let you be a failure.”',
    person:'Stanley McChrystal'
  },
  {
    quote:'“It’s not the load that breaks you down, it’s the way you carry it.”',
    person:'Lou Holtz'
  },
  {
    quote:'“The hard days are what make you stronger.”',
    person:'Aly Raisman'
  },
  {
    quote:'“If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.” ',
    person:'Wayne Dyer'
  },
  {
    quote:
      '"Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite. "',
    person: 'Erik Pevernagie',
  },

  {
    quote: '"Act first, explain later."',
    person: 'Dan Brown',
  },

  {
    quote:
      'Life would be a great deal easier if dead things had the decency to remain dead. ',
    person: 'Doug MacLeod',
  },

  {
    quote:
      '"The best way to find yourself is to lose yourself in the service of others."',
    person: 'Mahatma Gandhi',
  },

  {
    quote:
      '"If you want to live a happy life, tie it to a goal, not to people or things."',
    person: 'Albert Einstein',
  },

  {
    quote:
      '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."',
    person: 'Aristotle',
  },

  {
    quote:
      '"Your time is limited, so don\'t waste it living someone else\'s life."',
    person: 'Steve Jobs',
  },

  {
    quote:
      '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    person: 'Benjamin Franklin',
  },

  {
    quote:
      "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"",
    person: 'Oprah Winfrey',
  },

  {
    quote:
      '"it does not matter how slowly you go as long as you do not stop."',
    person: 'Confucius',
  },

  {
    quote:
      '"Our lives begin to end the day we become silent about things that matter."',
    person: 'Martin Luther king, Jr.',
  },

  {
    quote:
      '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: 'Dalai Lama',
  },

  {
    quote: '"The Journey of a thousand miles begins with one step."',
    person: 'lao Tzu',
  },

  {
    quote:
      '"But man is not made for defeat. A man can be destroyed but not defeated."',
    person: 'Ernest Hemingway',
  },

  {
    quote:
      '"Let us sacrifice our today so that our children can have a better tomorrow."',
    person: 'A. P. J. Abdul Kalam',
  },

  {
    quote: '"There is nothing permanent except change."',
    person: 'Heraclitus',
  },

  {
    quote: '"The Journey of a thousand miles begins with one step."',
    person: 'lao Tzu',
  },

  {
    quote: '"There is no charm equal to tenderness of heart."',
    person: 'Jane Austen',
  },

  {
    quote:
      '"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."',
    person: 'lao Tzu',
  },

  {
    quote: '"Learning never exhausts the mind."',
    person: 'Leonardo da Vinci',
  },

  {
    quote:
      '"Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."',
    person: 'Francis of Assisi',
  },

  {
    quote:
      '"Life without love is like a tree without blossoms or fruit."',
    person: 'Khalil Gibran',
  },

  {
    quote:
      '"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."',
    person: 'William Blake',
  },

  {
    quote:
      '"Good judgment comes from experience, and a lot of that comes from bad judgment."',
    person: 'Will Rogers',
  },

  {
    quote:
      '"Keep your face always toward the sunshine - and shadows will fall behind you."',
    person: 'Walt Whitman',
  },

  {
    quote:
      '"The supreme art of war is to subdue the enemy without fighting."',
    person: 'Sun Tzu',
  },

  {
    quote: '"Independence is happiness."',
    person: 'Susan B. Anthony',
  },

  {
    quote:
      '"Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak."',
    person: 'Thomas Carlyle',
  },

  {
    quote:
      '"If you cannot do great things, do small things in a great way."',
    person: 'Napoleon Hill',
  },

  {
    quote:
      '"It is far better to be alone, than to be in bad company."',
    person: 'George Washington',
  },

  {
    quote:
      "\"Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.\"",
    person: 'Satchel Paige',
  },

  {
    quote:
      '"Love cures people - both the ones who give it and the ones who receive it."',
    person: 'Karl A. Menninger',
  },

  {
    quote: '"Love has no age, no limit; and no death."',
    person: 'John Galsworthy',
  },

  {
    quote: '"Happiness can exist only in acceptance."',
    person: 'George Orwell',
  },

  {
    quote: '"Happiness can exist only in acceptance."',
    person: 'George Orwell',
  },

  {
    quote: '"Being entirely honest with oneself is a good exercise."',
    person: 'Sigmund Freud',
  },

  {
    quote:
      '"Keep your face always toward the sunshine - and shadows will fall behind you."',
    person: 'Walt Whitman',
  },

  {
    quote:
      '"Change your life today. Don\'t gamble on the future, act now, without delay."',
    person: 'Simone de Beauvoir',
  },

  {
    quote:
      '"Coming together is a beginning; keeping together is progress; working together is success."',
    person: 'Edward Everett Hale',
  },

  {
    quote:
      '"God gave us the gift of life; it is up to us to give ourselves the gift of living well."',
    person: 'Voltaire',
  },

  {
    quote:
      '"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."',
    person: 'Samuel Beckett',
  },

  {
    quote:
      '"There are two ways of spreading light: to be the candle or the mirror that reflects it."',
    person: 'Edith Wharton',
  },

  {
    quote:
      '"A new command I give you: Love one another. As I have loved you, so you must love one another."',
    person: 'Jesus Christ',
  },

  {
    quote:
      '"The best preparation for tomorrow is doing your best today."',
    person: 'H. Jackson Brown, Jr.',
  },

  {
    quote: '"Honesty is the first chapter in the book of wisdom."',
    person: 'Thomas Jefferson',
  },

  {
    quote:
      '"There is only one corner of the universe you can be certain of improving, and that\'s your own self."',
    person: 'Aldous Huxley',
  },

  {
    quote: '"There are no traffic jams along the extra mile."',
    person: 'Roger Staubach',
  },
  {
    quote: '"It is never too late to be what you might have been."',
    person: 'George Eliot',
  },
  {
    quote: '"You become what you believe."',
    person: 'Oprah Winfrey',
  },
  {
    quote: '"I would rather die of passion than of boredom."',
    person: 'Vincent van Gogh',
  },
  {
    quote:
      '"A truly rich man is one whose children run into his arms when his hands are empty."',
    person: 'Unknown',
  },
  {
    quote:
      '"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."',
    person: 'Ann Landers',
  },
  {
    quote:
      '"If you want your children to turn out well, spend twice as much time with them, and half as much money."',
    person: 'Abigail Van Buren',
  },
  {
    quote:
      '"Build your own dreams, or someone else will hire you to build theirs."',
    person: 'Farrah Gray',
  },
  {
    quote:
      '"The battles that count are the ones for gold medals. The struggles within yourself, the invisible battles inside all of us that is where it is at."',
    person: 'Jesse Owens',
  },
  {
    quote: '"Education costs money. But then so does ignorance."',
    person: 'Sir Claus Moser',
  },
  {
    quote:
      '"I have learned over the years that when ones mind is made up, this diminishes fear."',
    person: 'Rosa Parks',
  },
  {
    quote:
      '"It does not matter how slowly you go as long as you do not stop."',
    person: 'Confucius',
  },
  {
    quote:
      '"If you look at what you have in life, you will always have more. If you look at what you don\'t have in life, you will never have enough."',
    person: 'Oprah Winfrey',
  },
  {
    quote:
      '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: 'Dalai Lama',
  },
  {
    quote:
      '"You cannot use up creativity.  The more you use, the more you have."',
    person: 'Maya Angelou',
  },
  {
    quote: '"Dream big and dare to fail."',
    person: 'Norman Vaughan',
  },

  {
    quote:
      '"All behavior is driven by the desire to solve a problem. Sometimes the problem is that you notice something good and you want to obtain it. Sometimes the problem is that you are experiencing pain and you want to relieve it. Either way, the purpose of every habit is to solve the problems you face."',
    person: 'James Clear',
  },
  {
    quote:
      '"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."',
    person: 'Roy T. Bennett',
  },
  {
    quote:
      '"Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart."',
    person: ' Roy T. Bennett',
  },
  {
    quote:
      '"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine."',
    person: ' Roy T. Bennett',
  },
  {
    quote:
      '"The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward."',
    person: 'Steve Maraboli',
  },
  {
    quote:
      '"Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others."',
    person: 'Roy T. Bennett',
  },
  {
    quote:
      '"Success is not how high you have climbed, but how you make a positive difference to the world."',
    person: 'Roy T. Bennett',
  },
  {
    quote:
      '"Everything can be taken from a man but one thing: the last of the human freedoms—to choose one\'s attitude in any given set of circumstances, to choose one’s own way."',
    person: 'Viktor E. Frankl',
  },
  {
    quote:
      'Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.',
    person: 'Steve Maraboli',
  },
  {
    quote:
      '"It\'s not how much we have, but how much we enjoy, that makes happiness."',
    person: 'Charles Spurgeon',
  },
  {
    quote:
      'There are many opportunities every single day and Monday is a perfect opportunity to size them all.',
    person: 'Steve Maraboli',
  },
  {
    quote:
      '"trust in the Lord with all your heart and lean not in your own understanding."',
    person: 'Proverbs 3:5',
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
  let randomImage = Math.floor(Math.random() * backgroundImages.length);
  body.style.backgroundImage = `url('./images/${backgroundImages[randomImage]}')`;

  quote.innerText = quotes[randomQuote].quote;
  person.innerText = quotes[randomQuote].person;
});
twitterBtn.addEventListener('click', tweetQuote);
