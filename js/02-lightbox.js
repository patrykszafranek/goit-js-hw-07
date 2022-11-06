import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const imageLink = document.createElement("a");
  imageLink.setAttribute("href", item.original);
  imageLink.classList.add("gallery__item");

  const image = document.createElement("img");
  image.src = item.preview;
  image.setAttribute("alt", item.description);
  image.setAttribute("data-source", item.original);
  image.classList.add("gallery__image");

  imageLink.append(image);
  gallery.append(imageLink);
});

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  /* options */
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  enableKeyboard: true,
});

lightbox.on("show.simplelightbox", function () {
  console.log("lighbox otwarty");
});

lightbox.on("closed.simplelightbox", function () {
  console.log("lightbox zamkniety");
});
