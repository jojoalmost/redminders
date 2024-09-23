document.addEventListener('DOMContentLoaded', function () {
    // Check if the class 'strip-accordion' exists in the document
    if (document.querySelector('.strip-accordion')) {
        const accordionHeaders = document.querySelectorAll('.strip-accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const icon = this.querySelector('.strip-accordion-icon'); // Select the icon span within the header

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.textContent = "+"; // Change icon to "+"
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.textContent = "-"; // Change icon to "-"
                }

                // Collapse other accordions
                accordionHeaders.forEach(otherHeader => {
                    if (otherHeader !== this) {
                        const otherContent = otherHeader.nextElementSibling;
                        const otherIcon = otherHeader.querySelector('.strip-accordion-icon');
                        otherContent.style.maxHeight = null;
                        otherIcon.textContent = "+"; // Reset other icons to "+"
                    }
                });
            });
        });
    }
});
