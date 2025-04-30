const proEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseButton = editProfileModal.querySelector(".modal__close-btn");

proEditBtn.addEventListener("click", function () {
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
const nameInput = document.querySelector(".modal__input-name");
const descriptionInput = document.querySelector(".modal__input-description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const proSubmitBtn = document.querySelector("#pro-submit-btn");

nameInput.placeholder = profileName.textContent;
descriptionInput.placeholder = profileDescription.textContent;

proForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

const postForm = document.querySelector("#post-form");
const imageInput = document.querySelector(".modal__input-image");
const captionInput = document.querySelector(".modal__input-caption");

const postSaveBtn = document.querySelector("#post-save-btn");

postForm.addEventListener("submit", function (event) {
  event.preventDefault();
  newPostModal.classList.remove("modal_is-opened");
});
console.log("New Post Link:", imageInput.value);
console.log("New Post Title:", captionInput.value);
