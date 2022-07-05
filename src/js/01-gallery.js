import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery")
const markupGallery = createImgmarkup(galleryItems)

galleryRef.insertAdjacentHTML("beforeend", markupGallery)
galleryRef.addEventListener("click", clickOnImg)

function createImgmarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join("")
}
console.log(createImgmarkup(galleryItems))

function clickOnImg(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains("gallery__image")) {
    return
  }
  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"/> `)
  console.log(evt.target.dataset.source)
  instance.show()

  galleryRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close()
    }
  })
  console.log(instance)
}
