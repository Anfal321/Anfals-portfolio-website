// Set year in footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Contact form validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("formStatus").textContent = "";

    let ok = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.length < 2) {
      document.querySelector('[data-error-for="name"]').textContent = "Enter your name.";
      ok = false;
    }

    if (!email.includes("@")) {
      document.querySelector('[data-error-for="email"]').textContent = "Enter a valid email.";
      ok = false;
    }

    if (message.length < 5) {
      document.querySelector('[data-error-for="message"]').textContent = "Message is too short.";
      ok = false;
    }

    if (ok) {
      document.getElementById("formStatus").textContent = "Message sent (simulation).";
      form.reset();
    }
  });
}
