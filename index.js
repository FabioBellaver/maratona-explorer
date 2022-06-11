const answers = [
	"Certainly!",
	"I'm not so sure.",
	"It is decidedly so.",
	"Do not count on it.",
	"No doubt!",
	"Ask again later.",
	"Yes, definitely!",
	"My answer is no.",
	"You can count on it.",
	"Better not tell you now.",
	"As I see it, yes.",
	"My sources say no.",
	"Probably.",
	"Can't predict right now.",
	"I'm sure!",
	"Prospects are not so good.",
	"Yea.",
	"Concentrate and ask again.",
	"Signs point to yes.",
];

const answer = document.querySelector('#answer')
const questionInput = document.querySelector('#questionInput');
const questionOutput = document.querySelector('#questionOutput');
const askButton = document.querySelector('#askButton')

function makeQuestion() {
	
	if (questionInput.value == "") {
		questionOutput.innerHTML = "Please, make a question! 🙄";
		if(answer !== "") {
			answer.innerHTML = "";
		};
		return;
	};
	
	askButton.setAttribute("disabled", true);
	
	const answersTotal = answers.length;
	const randomNumber = Math.floor(Math.random() * answersTotal);
	
	answer.innerHTML = answers[randomNumber];
	questionOutput.innerHTML = `Your question: ${questionInput.value}`;

		answer.style.opacity = 1;
		questionOutput.style.opacity = 1;

		setTimeout(() => {
			answer.style.opacity = 0;
			questionOutput.style.opacity = 0;
			questionInput.value = "";
			askButton.removeAttribute("disabled");
	}, 3000);
	
};