const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  //pseudo array selectors
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((item) => {
      item.style.display = 'none';
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabContent = (index = 0) => {
    contents[index].style.display = 'block';
    tabs[index].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  //hang eventListener 'click' to parent element, who contain all tabs
  header.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
    ) {
      tabs.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          // hide all content on page
          hideTabContent();
          // show content === index
          showTabContent(index);
        }
      });
    }
  });
};

export default tabs;
