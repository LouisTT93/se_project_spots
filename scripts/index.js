const initialCards = [
  {
    name: `Val Thorens`,
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg`,
  },
  {
    name: `Restaurant terrace`,
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg`,
  },
  {
    name: `An outdoor cafe`,
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg`,
  },
  {
    name: `A very long bridge, over the forest and through the trees`,
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg`,
  },
  {
    name: `Tunnel with morning light`,
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg`,
  },
  {
    name: ` Mountain house`,
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg`,
  },
];

const cardheart = document.querySelector(".card__heart-active");

const proEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseButton = editProfileModal.querySelector(".modal__close-btn");

const proAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const proForm = document.querySelector("#pro-form");
const nameInput = proForm.querySelector("#card-caption-input");
const descriptionInput = proForm.querySelector("#profile-description-input");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");

const postForm = document.querySelector("#post-form");
const imageInput = postForm.querySelector("#card-image-input");
const captionInput = postForm.querySelector("#card-description-input");

function logCaption() {
  let imageInput = postForm.querySelector("#card-image-input").value;
  console.log("New Post Link:", imageInput);
  let captionInput = postForm.querySelector("#card-description-input").value;
  console.log("New Post Title:", captionInput);
}

proEditBtn.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_is-opened");
});
modalCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

proAddBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

proForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

postForm.addEventListener("submit", function (event) {
  event.preventDefault();
  logCaption(postForm);
  newPostModal.classList.remove("modal_is-opened");
});

function handleLike(evt) {
  evt.target.classList.toggle("card__heart-active");
}

initialCards.forEach((card) => console.log(card.name));
