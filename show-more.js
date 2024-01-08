document.addEventListener("DOMContentLoaded", function() {
            const sidebarContent = document.querySelector(".sidebar-grid__content");

            // Append the new HTML content to sidebarContent using innerHTML
            sidebarContent.innerHTML += `
                <div class="extend-for-more">
                    <span>Show More</span> 
                    <div class="show-more-arrow">
                        <img src="arrow-down-svgrepo-com.svg" alt="">
                    </div>
                </div>
            `;

            const extentForMore = document.querySelector(".extend-for-more");
            const showMoreSpan = extentForMore.querySelector("span");

            extentForMore.addEventListener("click", () => {
                // Toggle the 'mobile-extend' class on sidebarContent
                sidebarContent.classList.toggle("mobile-extend");

                // Toggle between "Show More" and "Show Less" text
                if (sidebarContent.classList.contains("mobile-extend")) {
                    showMoreSpan.textContent = "Show Less";
                } else {
                    showMoreSpan.textContent = "Show More";
                }
            });
        });
