function activateGallery(){
  let thumbnails = document.querySelectorAll(" #gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change which image is current
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
    });
  });
}
