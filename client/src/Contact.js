document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    status.textContent = "Message sent (simulated)";
    form.reset();
  });
});
