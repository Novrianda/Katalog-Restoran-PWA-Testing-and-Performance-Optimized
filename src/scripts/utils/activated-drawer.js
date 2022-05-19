const indexUrl = {
  '/': 0,
  '/home': 0,
  '/favorite': 1,
};

const removeActiveDrawer = (li) => {
  li.forEach((element) => {
    element.classList.remove('active');
  });
};

const activatedDrawer = (drawer, url) => {
  const li = drawer.querySelector('ul').querySelectorAll('li');
  removeActiveDrawer(li);
  if (indexUrl[url] !== undefined) li[indexUrl[url]].classList.add('active');
  drawer.classList.add('hidden');
};

export default activatedDrawer;
