
// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Title for the bot
const title = "THE CHATTER BOT";

// Initialize variables
let myName = "Guest12345";  // Default name if user doesn't provide one
let chatCount = 0;          // Counter to track how many times the user has chatted

/**
 * Function that repeatedly asks the user for input (chatting loop)
 */
function AskFunction() {
  // Prompt the user to say something (or type "exit" to quit)
  readline.question("You're about to enter a bao bun eating contest " + myName + '! You need to eat 5 to win!. (type "exit" to quit): ', input => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("YOU LOST " + myName + ". You owe everyone ",chatCount +"0000000000000 dollars!!!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }

    // If the user didn't type "exit", keep chatting
    console.log("You're doing great!"); // Acknowledge the user's input

    // Increment chatCount by 1 each time the user chats
    chatCount = chatCount + 1;
    console.log("You've eaten " + chatCount + " bao buns so far"); // Show how many chats have happened

    // If the user has chatted 5 times, end the conversation and prompt for payment
    if (chatCount === 5) {
      console.log("You won cus you ate " + chatCount, "bao buns!!! Good job!!!"); // Alert user they've hit the limit
      console.log("You win ",chatCount, "dollars"); // Prompt for payment
      readline.close(); // End the chat
      return;
    }

    // Recursively call the AskFunction() to keep the chat going
    AskFunction();
  });
}

/**
 * Function to ask for the user's name before starting the conversation
 */
function AskName() {
  console.log("WELCOME TO THE " + title); // Display the bot title
  // Ask the user for their name (or to type "exit" to quit)
  readline.question('Hello, what is your name? (type "exit" to quit): ', input => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }

    // Assign the input string (user's name) to the myName variable
    myName = input;

    // After getting the name, start the conversation loop
    AskFunction();
  });
}

// Start the program by asking for the user's name
AskName();

