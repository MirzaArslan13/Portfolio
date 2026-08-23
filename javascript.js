const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// ============================================================
// Typing effect in hero code editor
// ============================================================
const typedCodeEl = document.getElementById("typedCode");

const codeLines = [
  "const developer = {",
  '  name: "Mirza Arslan Sattar",',
  '  role: "Front-End Developer",',
  '  status: "CS Student",',
  '  stack: ["HTML", "CSS"],',
  '  learning: ["JS", "React"],',
  '  openTo: "Internships"',
  "};",
];

function typeCode() {
  if (!typedCodeEl) return;
  let lineIndex = 0;
  let charIndex = 0;
  let output = "";

  function typeChar() {
    if (lineIndex >= codeLines.length) return;
    const currentLine = codeLines[lineIndex];

    if (charIndex < currentLine.length) {
      output += currentLine[charIndex];
      charIndex++;
      typedCodeEl.textContent = output;
      setTimeout(typeChar, 18 + Math.random() * 22);
    } else {
      output += "\n";
      lineIndex++;
      charIndex = 0;
      typedCodeEl.textContent = output;
      setTimeout(typeChar, 120);
    }
  }
  typeChar();
}

const typeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeCode();
        typeObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 },
);

if (typedCodeEl) typeObserver.observe(typedCodeEl);
