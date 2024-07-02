document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-link");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      // Toggle zoomed class for the clicked image
      this.classList.toggle("zoomed");
    });
  });
});
