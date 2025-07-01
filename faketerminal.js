const output = document.getElementById('output');
const input = document.getElementById('commandInput');

const SECRET_CODE = 'open_sesame';

const responses = {
  help: "Commands: help, status, whoami, unlock, clear",
  status: "System unstable. AI breach detected...",
  whoami: "You're a glitch in the system.",
  unlock: "Access Denied. Try harder.",
  clear: () => output.innerHTML = '',
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    processCommand(command);
    input.value = '';
  }
});

function processCommand(cmd) {
  appendLine(`> ${cmd}`);

  if (cmd === SECRET_CODE) {
    appendLine("✔ ACCESS GRANTED. Welcome back, Operator.");
    document.body.style.backgroundColor = "#200";
    document.body.style.color = "#f00";
    document.querySelector(".terminal").style.borderColor = "#f00";
    return;
  }

  const response = responses[cmd];

  if (typeof response === "function") {
    response();
  } else if (response) {
    appendLine(response);
  } else {
    appendLine("✖ Unknown command. Type 'help'.");
  }

  scrollToBottom();
}

function appendLine(text) {
  const line = document.createElement('div');
  line.textContent = text;
  output.appendChild(line);
}

function scrollToBottom() {
  output.scrollTop = output.scrollHeight;
}
