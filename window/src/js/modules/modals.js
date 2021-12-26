const modals = () => {
  // trigger - it's button or link
  const bindModal = (trigger, modal, close) => {
    //OPEN modal window
    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      modal.style.display = 'block';
      //when open modal - scroll from right side - hide
      // document.body.style.overflow = 'hidden';
      //add class bootstrap
      document.body.classList.add('modal-open');
    });

    //CLOSE modal window
    close.addEventListener('click', () => {
      modal.style.display = 'none';
      // document.body.style.overflow = '';
      //remove class bootstrap
      document.body.classList.remove('modal-open');
    });

    //CLOSE modal window when click outside modal window
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        // document.body.style.overflow = '';
        //remove class bootstrap
        document.body.classList.remove('modal-open');
      }
    });
  };

  const callEngineerBtn = document.querySelector('.popup_engineer_btn');
  const modalEngineer = document.querySelector('.popup_engineer');
  const modalEngineerClose = document.querySelector(
    '.popup_engineer .popup_close'
  );

  bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};

export default modals;
