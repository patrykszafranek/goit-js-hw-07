import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance = basicLightbox.create(`<img src="" alt=""`);

galleryItems.forEach((item) => {
    const imageBox = document.createElement("div");
    imageBox.classList.add("gallery__item");

    const imageLink = document.createElement("a");
    imageLink.setAttribute("href", item.original);
    imageLink.classList.add("gallery__link");

    const image = document.createElement("img");
    image.src = item.preview;
    image.setAttribute("alt", item.description);
    image.setAttribute("data-source", item.original);
    image.classList.add("gallery__image");

    imageLink.append(image);
    imageBox.append(imageLink);
    gallery.append(imageBox);
});

const imageHandler = (event) => {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();

    instance = basicLightbox.create(`<img src=${event.target.getAttribute("data-source")} alt="${event.target.getAttribute("alt")}">`);
    instance.show();
};
gallery.addEventListener("click", imageHandler);

//ESCAPE EVENT
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) instance.close();
});