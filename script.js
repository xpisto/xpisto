function showTech(id, btn) {
  document.querySelectorAll(".tech-list").forEach(el =>
    el.classList.remove("active")
  );
  document.querySelectorAll(".tech-btn").forEach(el =>
    el.classList.remove("active")
  );

  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}
// FAQ Accordion + Analytics Ready
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const key = item.getAttribute("data-question");

    // close others
    document.querySelectorAll(".faq-item").forEach(el => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");

    // 🔍 Analytics hook (future use)
    console.log("FAQ clicked:", key);
    // gtag('event', 'faq_click', { faq: key });
  });
});

