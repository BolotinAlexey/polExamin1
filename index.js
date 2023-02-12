const ref = {
  btn: document.querySelectorAll('.config__btn'),
  content: document.querySelector('.content'),
  fontColor: document.querySelector('#fontColor'),
  paragraph: document.querySelector('.down__text'),
  fontSize: document.querySelector('#fontSize'),
  checkbox: document.querySelector('[type="checkbox"]'),
  img: document.querySelector('.content__img'),
  radio: document.querySelectorAll('.radio'),
  content__list: document.querySelector('.content__list'),
};
ref.btn.forEach(el => {
  el.addEventListener(
    'click',
    () => (ref.content.style.backgroundColor = el.dataset.bg)
  );
});

ref.fontColor.addEventListener(
  'change',
  e => (ref.paragraph.style.color = e.target.value)
);
ref.fontSize.addEventListener(
  'change',
  e => (ref.paragraph.style.fontSize = e.target.value)
);

ref.checkbox.addEventListener(
  'change',
  e => (ref.img.style.borderColor = e.target.checked ? 'white' : 'transparent')
);
ref.radio.forEach(el =>
  el.addEventListener('change', () => {
    ref.content__list.style.listStyle = el.value;
  })
);
