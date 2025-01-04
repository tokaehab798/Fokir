var quotes=[
    {
        authorName:"― Oscar Wilde",
        theQuote:"“Be yourself; everyone else is already taken.”"
    },
    {
        authorName:"― Marilyn Monroe",
        theQuote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
    },
    {
        authorName:"  ― Frank Zappa",
        theQuote:"“So many books, so little time.”"
    },
    {
        authorName:" ― Albert Einstein",
        theQuote:" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        authorName:"― Marcus Tullius Cicero",
        theQuote:"  “A room without books is like a body without a soul.”"
    },
    {
        authorName:"― Bernard M. Baruch",
        theQuote:" “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        authorName:"― Mahatma Gandhi",
        theQuote:" “Be the change that you wish to see in the world.”"
    },
    {
        authorName:"― Mae West",
        theQuote:"  “You only live once, but if you do it right, once is enough.”"
    },
    {
        authorName:"― Marcus Tullius Cicero",
        theQuote:"  “A room without books is like a body without a soul.”"
    },
    {
        authorName:"― Dr. Seuss",
        theQuote:"  “You know you're in love when you cant fall asleep because reality is finally better than your dreams.”"
    },
    {
        authorName:"― William W. Purkey",
        theQuote:" “You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”"
    },
    {
        authorName:"― Robert Frost",
        theQuote:" “In three words I can sum up everything I've learned about life: it goes on.”"
    },
    {
        authorName:"― Mark Twain",
        theQuote:"“If you tell the truth, you don't have to remember anything.”"
    },
   
]

function getRandomQuote(){
  var index=Math.floor(Math.random()*quotes.length)
  if(index)
document.getElementById("quote").innerHTML=` ${quotes[index].theQuote} 
</br> ${quotes[index].authorName}`
}

function changeColor(){
    var button=document.getElementById("button");
    button.classList.add("btn-success");
}