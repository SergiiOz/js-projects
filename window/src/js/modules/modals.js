const modals = () => {
  // trigger - it's button or link
  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) => {
    //trigger - pseudo array selectors
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    //we added data attribute into html, to popup
    //get all popup with attribute 'data-modal'
    const window = document.querySelectorAll('[data-modal]');

    //pseudo array selectors
    trigger.forEach((item) => {
      //OPEN modal window
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        //close all popup windows
        window.forEach((item) => {
          item.style.display = 'none';
        });

        modal.style.display = 'block';
        // //when open modal - scroll from right side - hide
        document.body.style.overflow = 'hidden';
        // //open modal window - with add bootstrap class
        // document.body.classList.add('modal-open');
      });
    });

    //CLOSE modal window
    close.addEventListener('click', () => {
      //close all popup windows
      window.forEach((item) => {
        item.style.display = 'none';
      });

      modal.style.display = 'none';
      document.body.style.overflow = '';
      //close modal window - with remove bootstrap class
      // document.body.classList.remove('modal-open');
    });

    //CLOSE modal window when click outside modal window
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        //close all (modal) popup windows
        window.forEach((item) => {
          item.style.display = 'none';
        });

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

  //show popup when 'calculate the cost'
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

  //chain modal windows
  bindModal(
    '.popup_calc_button',
    '.popup_calc_profile',
    '.popup_calc_profile_close',
    false
  );
  bindModal(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close',
    false
  );
  //run by time
  // showModalByTime('.popup', 6);
};

export default modals;
