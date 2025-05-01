const proEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseButton = editProfileModal.querySelector(".modal__close-btn");

proEditBtn.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_is-opened");
});
modalCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

const proAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

proAddBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

const proForm = document.querySelector("#pro-form");
const nameInput = proForm.querySelector("#card-caption-input");
const descriptionInput = proForm.querySelector("#profile-description-input");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");

proForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

const postForm = document.querySelector("#post-form");
const imageInput = document.querySelector("#card-image-input");
const captionInput = document.querySelector("#card-description-inpu");

postForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("New Post Link:", imageInput);
  console.log("New Post Title:", captionInput);
  newPostModal.classList.remove("modal_is-opened");
});
