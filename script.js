(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "12px";
      nav.style.position = "absolute";
      nav.style.top = "62px";
      nav.style.right = "14px";
      nav.style.padding = "14px";
      nav.style.borderRadius = "14px";
      nav.style.background = "rgba(7,11,20,.80)";
      nav.style.backdropFilter = "blur(14px)";
      nav.style.border = "1px solid rgba(255,255,255,.10)";
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14 });

  els.forEach(el => io.observe(el));
})();