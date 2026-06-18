const input = document.getElementById("messageInput");

function fillQuestion(question) {
  input.value = question;
}

function addUserMessage(message) {

  const div = document.createElement("div");

  div.classList.add("user-message");

  div.textContent = message;

  document
    .getElementById("chatContainer")
    .appendChild(div);
}

function addBotMessage(message) {

  const div = document.createElement("div");

  div.classList.add("bot-message");

  div.textContent = message;

  document
    .getElementById("chatContainer")
    .appendChild(div);
}

async function sendMessage() {

  const message = input.value.trim();

  if (!message) return;

  addUserMessage(message);

  input.value = "";

  try {

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await response.json();

    addBotMessage(data.reply);

  } catch (error) {

    console.error(error);

    addBotMessage(
      "Something went wrong."
    );
  }
}

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){
sendMessage();
}

});