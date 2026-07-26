const PHONE = "995555320865";

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const estimate = document.querySelector("[data-estimate]");
const serviceType = document.querySelector("[data-service-type]");
const helperCount = document.querySelector("[data-helper-count]");
const quoteForm = document.querySelector("[data-quote-form]");
const ESTIMATE_DISCOUNT = 0.65;
const ESTIMATE_ROUND_TO = 10;
const ESTIMATE_MIN = 50;

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  if (!header || !nav || !menuToggle) return;
  document.body.classList.remove("is-menu-open");
  header.classList.remove("is-open");
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function updateEstimate() {
  if (!estimate || !serviceType || !helperCount) return;

  const typeBase = {
    taxi: 70,
    move: 70,
    turnkey: 140,
    assembly: 70,
    materials: 70,
    junk: 90,
    intercity: 180
  };
  const helpers = Number(helperCount.value || 0);
  const base = typeBase[serviceType.value] || 80;
  const rawTotal = base + helpers * 20;
  const total = Math.max(ESTIMATE_MIN, Math.round((rawTotal * ESTIMATE_DISCOUNT) / ESTIMATE_ROUND_TO) * ESTIMATE_ROUND_TO);

  estimate.textContent = serviceType.value === "intercity" ? `${total} ₾+` : `${total} ₾`;
}

function fieldLabel(field) {
  return field?.closest("label")?.querySelector("span")?.textContent?.trim() || field?.name || "";
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("is-menu-open", isOpen);
    header?.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  document.querySelectorAll("[data-reveal]").forEach(function (node) {
    observer.observe(node);
  });
} else {
  document.querySelectorAll("[data-reveal]").forEach(function (node) {
    node.classList.add("is-visible");
  });
}

[serviceType, helperCount].forEach(function (node) {
  if (node) node.addEventListener("change", updateEstimate);
});
updateEstimate();

if (quoteForm) {
  quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const type = form.querySelector("[name='type']");
    const helpers = form.querySelector("[name='helpers']");
    const from = form.querySelector("[name='from']");
    const to = form.querySelector("[name='to']");
    const comment = form.querySelector("[name='comment']");
    const messageStart = form.dataset.whatsappMessage || "Здравствуйте, хочу рассчитать перевозку BoxMove.";
    const lines = [
      messageStart,
      `${fieldLabel(from)}: ${data.get("from") || "-"}`,
      `${fieldLabel(to)}: ${data.get("to") || "-"}`,
      `${fieldLabel(type)}: ${type?.selectedOptions?.[0]?.textContent || "-"}`,
      `${fieldLabel(helpers)}: ${helpers?.selectedOptions?.[0]?.textContent || "-"}`,
      `${fieldLabel(comment)}: ${data.get("comment") || "-"}`
    ];

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}
