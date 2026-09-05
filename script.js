const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
 
  "someone is proud of you.",
  "you can do whatever you put your mind to.",
  "you are going to be fine, even if it doesn't work out.",
  "sometimes it doesn't work out, because there's something better planned for you.",
  "you'll make it through.",
  "stay strong soldier, you got this.",
  "you have big dreams for a reason, go and chase them.",
  "you matter.",
  "the worst is never the worst.",
  "Jesus loves you.",
  "you are someone's favourite person to sit next to.",
  "the thing you are building counts, even half finished.",
  "you are allowed to be a beginner for as long as you need.",
  "someone is going to love what you make with this.",
  "hot chocolate tastes better after a hard day. you've earned one.",
  "you ask good questions. that is the whole skill.",
  "you are progressing.",
  "don't feel bad for resting, rest helps you grow, so you can come back better tomorrow.",
  "it may feel like it's too big to accomplish, but God put that on your mind for a reason.",
  "you deserve that sweet treat.",
  "if you work hard for it, you can achieve it.",
  "you are enough.",
  "progress takes time.",
  "let them.",
  "this chapter of your life is important for growth.",
  "'Some people are going to hate you for no reason, and you are going to shine regardless.'-SZA",
  "'If everything was perfect, you would never learn and you would never grow.'-Beyoncé",
  "be yourself because no one else can be you",
  "go and do what makes you happy (if it's legal).",
  "you is kind, you is smart, you is important.",
  "you are loved.",
  "you deserve that time for yourself.",
  ":)"
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);
 
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});