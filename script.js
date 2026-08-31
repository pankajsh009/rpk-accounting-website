const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const navigationLinks = document.querySelectorAll(".primary-navigation a");
const serviceType = document.querySelector("#service-type");
const estimateValue = document.querySelector("#estimate-value");
const estimateNote = document.querySelector("#estimate-note");
const estimateCta = document.querySelector("#estimate-cta");
const currentYear = document.querySelector("#current-year");

const estimates = {
  personal: {
    value: "$50",
    note: "For a straightforward personal return with standard slips.",
    subject: "Personal Tax Consultation",
  },
  couple: {
    value: "$100",
    note: "For two straightforward personal returns with standard slips.",
    subject: "Couple Personal Tax Consultation",
  },
  rental: {
    value: "$100",
    note: "Starting point for a personal return that includes rental income.",
    subject: "Rental Income Tax Consultation",
  },
  "self-employed": {
    value: "$100+",
    note: "Starting point; the final fee depends on the business records and schedules required.",
    subject: "Self-Employed Tax Consultation",
  },
  corporate: {
    value: "Custom",
    note: "Corporate tax and ongoing accounting are quoted after a quick scope review.",
    subject: "Small Business Accounting Consultation",
  },
};

function closeMenu() {
  if (!menuToggle || !navigation) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

function updateEstimate() {
  if (!serviceType || !estimateValue || !estimateNote || !estimateCta) return;

  const selectedEstimate = estimates[serviceType.value];
  estimateValue.textContent = selectedEstimate.value;
  estimateNote.textContent = selectedEstimate.note;
  estimateCta.href = `mailto:tax.rpk@gmail.com?subject=${encodeURIComponent(selectedEstimate.subject)}`;
}

if (serviceType) {
  serviceType.addEventListener("change", updateEstimate);
  updateEstimate();
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
