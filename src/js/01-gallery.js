// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const ulGallery = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery_image" src="${item.preview}" alt="${item.description}">
        </a></li>`
    )
    .join("");
}

ulGallery.insertAdjacentHTML("beforeend", markup);

let galleryLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 200,
});
