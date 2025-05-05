// initialCards are being stored globally here

const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// below is for the like button aka cardheart

const cardheart = document.querySelector(".card__heart-active");

// below are the objects on the edit button to open and close the edit modal

const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseButton = editProfileModal.querySelector(".modal__close-btn");

// below are the objects on the edit button to open and close the new post modal

const profileAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const profileForm = document.querySelector("#pro-form");
const nameInput = profileForm.querySelector("#card-caption-input");
const descriptionInput = profileForm.querySelector(
  "#profile-description-input"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");

const postForm = document.querySelector("#post-form");
const imageInput = postForm.querySelector("#card-image-input");
const captionInput = postForm.querySelector("#card-description-input");

const cardContainer = document.querySelector(".cards");

const cardList = document.querySelector(".cards__list");
// below function clones the template and injects data
//  from the array and returns all cardElement text content

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const modalPreview = document.querySelector("#modal-preview-image");

const cardPreviewClose = modalPreview.querySelector(
  ".modal__close-btn_preview"
);
const modalPreviewImgEl = modalPreview.querySelector(".modal__image");
const modalCaption = modalPreview.querySelector(".modal__caption");

// open and closing functions for code reusability

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete");

  cardTitleEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  // card like and card delete elements

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button-active");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardDeleteBtn.closest(".card").remove();
  });

  cardImageEl.addEventListener("click", function () {
    modalCaption.textContent = data.name;
    modalPreviewImgEl.src = data.link;
    modalPreviewImgEl.alt = data.name;

    console.log("cardImageEl.src.value");
    console.log("cardImageEl.src.value");
    openModal(modalPreview);
  });
  return cardElement;
}

cardPreviewClose.addEventListener("click", function () {
  closeModal(modalPreview);
});

profileEditBtn.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

profileAddBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// close

modalCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

// forms submit and close

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfileModal);
});

postForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValues = {
    name: captionInput.value,
    link: imageInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);
  closeModal(newPostModal);
});

// like-event is below

function handleLike(evt) {
  evt.target.classList.toggle("card__heart-active");
}

// forEach function for getting all the cards

initialCards.forEach((item) => {
  console.log(getCardElement(item));
  cardList.append(getCardElement(item));
});
