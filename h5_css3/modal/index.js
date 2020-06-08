
class Modal {
  constructor({header, body}) {
    this.fragments = document.createDocumentFragment();

    const outerModal = document.createElement("div");
    outerModal.className = "modal close";
    this.id = `modal_${ Math.floor(Math.random() * 10000 ) }`;
    outerModal.id = this.id;

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.textContent = header;

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.textContent = body;

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    const footerClose = document.createElement("button");
    footerClose.textContent = "close";
    footerClose.onclick = () => {
      const modal = document.querySelector(`#${this.id}`);
      modal.setAttribute("class", "modal close");
      modal.remove();
    }
    modalFooter.appendChild(footerClose);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    outerModal.appendChild(modalContent);

    this.fragments.appendChild(outerModal);
  }

  id = null;
  fragments = null;
  open = () => {
    document.body.append(this.fragments);
    const modal = document.querySelector(`#${this.id}`);
    modal.setAttribute("class", "modal open");
  }
}
const openModalClass = () => {
  const model = new Modal({ 
    header: "encapsulated header", 
    body: "encapsulated body" 
  });
  model.open();
}


const openModal = () => {
  // const model = new Modal("wow");
  // model.open();
  const modal = document.querySelector("#modal_1");
  modal.setAttribute("class", "modal open");
}

const closeModal = () => {
  const modal = document.querySelector("#modal_1");
  modal.setAttribute("class", "modal close");
}