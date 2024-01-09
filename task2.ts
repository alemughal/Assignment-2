// Purpose: To create a quiz game using TypeScript.

// Function to fetch a random question
function fetchQuestion(): Promise<string> {
        const quizQuestions: string[] = [
            "What is the capital of France?",
            "Who wrote the play 'Hamlet'?",
            "What is the chemical symbol for gold?",
            "In which year did the French Revolution begin?"
        ];

        // Choose a random question
        const randomIndex: number = Math.floor(Math.random() * quizQuestions.length);
        const randomQuestion: string = quizQuestions[randomIndex];

        // Resolve the promise with the random question
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(randomQuestion);
            }, 1000);
        });
    };


// Function to fetch a random answer

fetchQuestion()
    .then((question) => {
        console.log(`Question: ${question}`);
    })
    .catch((error) => {
        console.log(error);
    });