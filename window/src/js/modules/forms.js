const forms = () => {
  const allForms = document.querySelectorAll('form');
  const allInputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name = "user_phone"]');

  phoneInputs.forEach((item) => {
    item.addEventListener('input', () => {
      // '/|D/'  - if user write we search not number -> change to empty string ''
      item.value = item.value.replace(/\D/, '');
    });
  });

  //create object with text message
  const message = {
    loading: 'Loading...',
    success: 'Thank you! We will contact with you soon',
    failure: 'Something went wrong...',
  };

  //POST
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  //Clear Inputs
  const clearInputs = () => {
    allInputs.forEach((item) => {
      item.value = '';
    });
  };

  allForms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      //create 'div' for message
      let statusMessage = document.createElement('div');
      //add class to div
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      //if we pass the form to constructor, object automatic will read all field from form
      const formData = new FormData(item);

      postData('assets/server.php', formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            //delete element from the page
            statusMessage.remove();
          }, 5 * 1000);
        });
    });
  });
};

export default forms;
