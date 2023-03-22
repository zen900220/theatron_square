const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(1);
        elements.forEach((ele) => ele.classList.remove("hidden"));
      } else {
        console.log(2);
        elements.forEach((ele) => ele.classList.add("hidden"));
      }
    });
  },
  {
    threshold: 0.2,
    root: null,
  }
);

const elements = document.querySelectorAll(".hidden");

// elements.forEach((element) => observer.observe(element));
observer.observe(document.querySelector(".intro"));
