console.log('hola github!');

const objTagToColor = {
  refactor: {
    bg: 'hsl(300, 35%, 20%)',
    fg: 'hsl(300, 58%, 34%)',
    text: 'hsl(300, 70%, 80%)',
  },
};

const arrTags = Object.keys(objTagToColor);
const regexTag = new RegExp(`tag:(${arrTags.join('|')})$`);

const $items = document.querySelectorAll('.js-commits-list-item');

$items.forEach($item => {
  const strTagOrNull = selectTag($item);
  if (strTagOrNull === null) {
    return;
  }

  const $tag = createTagElement(strTagOrNull);
  addElementToUI($item, $tag);
});

function selectTag($elem) {
  const $commitDescription = $elem.querySelector('div > div > pre');
  if ($commitDescription === null) {
    return null;
  }

  const strTextContent = $commitDescription.textContent;
  const regexTagExecResult = regexTag.exec(strTextContent);
  if (regexTagExecResult === null) {
    return null;
  }

  const tag = regexTagExecResult.input.split(':')[1];
  if (!tag) {
    return null;
  }

  return tag;
}

function addElementToUI($target, $elemToAdd) {
  const $commitTitle = $target.querySelector('div > p');
  if ($commitTitle === null) {
    return;
  }

  $commitTitle.append($elemToAdd);
}

function createTagElement(strTag) {
  const objColor = objTagToColor[strTag];

  const $tag = document.createElement('span');
  $tag.textContent = strTag;
  $tag.style.padding = '0.5rem';
  $tag.style.backgroundColor = objColor.bg;
  $tag.style.border = `1px solid ${objColor.fg}`;
  $tag.style.color = objColor.text;
  $tag.style.padding = '0.1rem 0.4rem';
  $tag.style.borderRadius = '0.3rem';

  return $tag;
}
