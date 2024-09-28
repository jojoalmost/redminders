document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".strip-accordion")) {
    const accordionHeaders = document.querySelectorAll(
      ".strip-accordion-header",
    );
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const accordion = header.parentElement;
        if (accordion.classList.contains("active")) {
          accordion.classList.remove("active");
        } else {
          document
            .querySelector(".strip-accordion-item.active")
            ?.classList.remove("active");
          accordion.classList.add("active");
        }
      });
    });
  }
});
