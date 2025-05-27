document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Gracias por contactarnos. Te responderemos pronto.";
    this.reset();
  });
  