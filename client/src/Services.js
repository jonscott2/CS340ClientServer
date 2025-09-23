document.addEventListener("DOMContentLoaded", () => {
  const services = [
    { name: "Web Design", desc: "Beautiful responsive websites" },
    { name: "Hosting", desc: "Fast and secure web hosting" },
    { name: "SEO", desc: "Optimize your site for search engines" }
  ];

  const container = document.getElementById("services");

  services.forEach(service => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h2>${service.name}</h2>
      <p>${service.desc}</p>
    `;
    container.appendChild(card);
  });
});
