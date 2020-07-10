const quotes = [
	{
		name: "Coco Chanel",
		quote: "Success is most often achieved by those who don’t know that failure is inevitable."
	},
	{
		name:"Kanye West",
		quote:"I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness."
	},
	{
		name:"Tony Robbins",
		quote:"If you do what you’ve always done, you’ll get what you’ve always gotten."
	},
	{
		name:"Aristotle",
		quote:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
	},
	{
		name:"Lao Tzu",
		quote:"When I let go of what I am, I become what I might be."
	},
	{
		name:"Albert Einstein",
		quote:"I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself."
	},
	{
		name:"Sheryl Sandberg",
		quote:"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on."
	},
	{
		name:"Thelma and Louise",
		quote:"You get what you settle for."
	},
	{
		name:"T. S. Eliot",
		quote:"Only those who will risk going too far can possibly find out how far one can go."
	},
	{
		name:"Iveta Cherneva",
		quote:"Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary."
	},
	{
		name:"Dhirubhai Ambani",
		quote:"If you don’t build your dream, someone else will hire you to help them build theirs."
	},
	{
		name:"Ralph Waldo Emerson",
		quote:"Don’t be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better."
	},
	{
		name:" Anais Nin",
		quote:"And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom."
	},
	{
		name:"Ayn Rand",
		quote:"The question isn’t who is going to let me; it’s who is going to stop me."
	},
	{
		name:"George Eliot",
		quote:"It is never too late to be what you might have been."
	},
	{
		name:" Deepak Chopra",
		quote:"Always go with your passions. Never ask yourself if it’s realistic or not."
	},
	{
		name:"Mario Andretti",
		quote:"If things seem under control, you are just not going fast enough."
	},
	{
		name:"Braveheart",
		quote:"Every man dies, but not every man really lives."
	},
	{
		name:"J.K.Rowling ",
		quote:"It is our choices that show what we truly are, far more than our abilities."
	},
	{
		name:"Lao Tzu ",
		quote:"A journey of a thousand miles begins with a single step."
	},
	{
		name:"Warren Buffett",
		quote:"If you don't find a way to make money while you sleep you will work until you die"
	},
	{
		name:"A.P.J. Abdul Kalam",
		quote:"The best brains of the Nation may by found in the last benches of the CLASSROOM."
	},
	{
		name:"A.P.J. Abdul Kalam",
		quote:"If you want to shine like a sun, first burn like a sun."
	},
	{
		name:"Mark Zukerberg",
		quote:"The biggest risk is not taking any risk.... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
	},
	{
		name:"Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
		quote:""
	},
	{
		name:"Muniba Mazari",
		quote:"I coundn't find a Hero in my life so I became ONE."
	},
	{
		name:"Elon Musk",
		quote:"Any product that needs a manual to run is already BROKEN."
	},
	{
		name:"Elon Musk",
		quote:"I think it is possible for ordinary people to be extraordinary."
	},
	{
		name:"Richard Branson",
		quote:"If somebody offers you an amazing opportunity but you are not sure you can do it, say YES, then learn how to do it later."
	},
	{
		name:"Richard Branson",
		quote:"Starting your own business isn't just a job - it's a way of life. "
	},
	{
		name:"Steve Jobs",
		quote:"Your time is limited, don't waste it living someone else's life."
	},
	{
		name:"Steve Jobs",
		quote:"Innovation distinguishes between a leader and a follower. "
	},
	{
		name:"Aristotle",
		quote:" A friend to all is a friend to NONE."
	},

	{
		name:"Aristotle",
		quote:"Quality is not an act, it is a habit."
	},

	{
		name:"Milton Berle",
		quote:"If opportunity doesn't knock, build a door."
	}


];

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");



quoteBtn.addEventListener("click", displayQuote);


function displayQuote() {
	let number = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = "\" " + quotes[number].quote + " \"";
	quoteAuthor.innerHTML = " - " + quotes[number].name;
}

