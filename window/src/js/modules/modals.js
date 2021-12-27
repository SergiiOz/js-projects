const modals = () => {
  // trigger - it's button or link
  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    //trigger - pseudo array selectors
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    //pseudo array selectors
    trigger.forEach((item) => {
      //OPEN modal window
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = 'block';
        // //when open modal - scroll from right side - hide
        document.body.style.overflow = 'hidden';
        // //open modal window - with add bootstrap class
        // document.body.classList.add('modal-open');
      });
    });

    //CLOSE modal window
    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      //close modal window - with remove bootstrap class
      // document.body.classList.remove('modal-open');
    });

    //CLOSE modal window when click outside modal window
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        //close modal window - with remove bootstrap class
        // document.body.classList.remove('modal-open');
      }
    });
  };

  const showModalByTime = (targetSelector, time) => {
    setTimeout(() => {
      document.querySelector(targetSelector).style.display = 'block';
      document.body.style.overflow = '';
    }, time * 1000);
  };

  // const callEngineerBtn = document.querySelector('.popup_engineer_btn');
  // const modalEngineer = document.querySelector('.popup_engineer');
  // const modalEngineerClose = document.querySelector(
  //   '.popup_engineer .popup_close'
  // );

  //run by button
  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  //run by link
  bindModal('.phone_link', '.popup', '.popup .popup_close');

  //run by time
  // showModalByTime('.popup', 6);
};

export default modals;
