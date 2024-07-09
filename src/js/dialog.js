"use strict";
const elements = {
  openDialogBtn: document.querySelector("[data-dialog-open]"),
  dialog: document.querySelector("[data-dialog]"),
  closeDialogBtn: document.querySelector("[data-dialog-close]"),
};

const toggleDialog = () => {
  if (elements.dialog.hasAttribute("open")) {
    elements.dialog.close();
  } else {
    elements.dialog.showModal();
  }
  document.body.classList.toggle("no-scroll");
};

elements.openDialogBtn.addEventListener("click", toggleDialog);
elements.closeDialogBtn.addEventListener("click", toggleDialog);
