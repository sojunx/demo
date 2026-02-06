const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`)
          link.classList.add("active");
      });
    });
  },
  {
    threshold: 0.6, // section chiếm ~60% viewport mới active
  },
);

sections.forEach((section) => observer.observe(section));
