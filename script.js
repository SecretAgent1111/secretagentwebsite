const input = document.getElementById("commandInput");
const screen = document.getElementById("screen");

const commands = {
  personal: `
Name      : Varun Sai Yadla
Location  : Hyderabad, Telangana, India
Focus     : Blue Team | SOC | Threat Detection
Email     : yadlavarun11@gmail.com
LinkedIn  : linkedin.com/in/varunsaiyadla
`,

  certs: `
⭐ CERTIFICATIONS ⭐

• Cyber Security 101 (SEC1)
• SOC Level 1 Certificate
• CompTIA Network+ (N10-009)
• Advanced Certification Program in Cybersecurity

TryHackMe: Top 2%
`,

  labs: `
🧪 TRYHACKME ROOMS

• CupidBot
  - Exploited insecure AI prompt handling
  - Used prompt injection to extract hidden information

• SOC Level 1
• Web Fundamentals
• Network Fundamentals
`,

  experience: `
InfoSec4TC – Cyber Security Specialist
Cartel Software – Cyber Security Analyst
`,

  education: `
MSc Applied Cyber Security – Queen’s University Belfast
B.Tech CSE (Cyber Security)
`,

  clear: "CLEAR"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    addCommand(cmd);

    if (commands[cmd]) {
      if (commands[cmd] === "CLEAR") {
        screen.innerHTML = "";
      } else {
        addOutput(commands[cmd]);
      }
    } else {
      addOutput("command not found. Type 'help'");
    }

    input.value = "";
    screen.scrollTop = screen.scrollHeight;
  }
});

function addCommand(cmd) {
  const p = document.createElement("p");
  p.innerHTML = `<span class="prompt">varun@sec-lab:~$</span> ${cmd}`;
  screen.appendChild(p);
}

function addOutput(text) {
  const pre = document.createElement("pre");
  pre.className = "output";
  pre.textContent = text;
  screen.appendChild(pre);
}
