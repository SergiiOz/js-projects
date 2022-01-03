const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = '.block'
) => {
  const header = document.querySelector(headerSelector);
  //pseudo array selectors
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((item) => {
      item.style.display = 'none';
    });

    tabs.forEach((item) => {
      // we get class with '.', and need remove '.' example: '.active' -> 'active'
      // /\./ - regular expression, search '.' and replace -> empty string ''
      item.classList.remove(activeClass.replace(/\./, ''));
    });
  };

  const showTabContent = (index = 0) => {
    contents[index].style.display = display.replace(/\./, '');
    tabs[index].classList.add(activeClass.replace(/\./, ''));
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
