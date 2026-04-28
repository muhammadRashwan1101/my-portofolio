const nav = document.getElementById("nav");
      window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
      });

      // Reveal on scroll
      const reveals = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, 100);
            }
          });
        },
        { threshold: 0.1 },
      );
      reveals.forEach((el) => observer.observe(el));