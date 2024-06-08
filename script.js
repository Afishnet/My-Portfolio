document.addEventListener("DOMContentLoaded", function () {
  const showContactButton = document.getElementById("showContactButton");
  const closeContactButton = document.getElementById("closeContactButton");
  const contactDetails = document.getElementById("contactDetails");

  showContactButton.addEventListener("click", () => {
    contactDetails.style.display = "block";
  });

  closeContactButton.addEventListener("click", () => {
    contactDetails.style.display = "none";
  });
});
