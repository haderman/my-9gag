let state = {
  muted: true,
};

document
  .querySelectorAll('video')
  .forEach(showControls);

const observer = new MutationObserver(([mutation]) =>
  mutation
    .addedNodes
    .forEach(node =>
      node
        .querySelectorAll('video')
        .forEach($video => {
          showControls($video);
          setMutedState($video);
        })
    )
);

observer.observe(
  document.getElementById('list-view-2'),
  { childList: true }
);

function showControls($video) {
  $video.controls = true;
  return $video;
}

function setMutedState($video) {
  $video.muted = state.muted;
  return $video;
}

// add global muted button

document
  .querySelector('body')
  .appendChild(createButton())

function createButton() {
  const button = document.createElement('button');

  button.style.position = 'fixed';
  button.style.zIndex = 10;
  button.style.bottom = '20px';
  button.style.left = '20px';
  button.style.backgroundColor = 'black';
  button.style.borderRadius = '50%';
  button.style.padding = '24px';
  button.style.border = '3px solid hsl(210, 40%, 50%)';
  button.style.cursor = 'pointer';

  // 9gag css class
  button.className = state.muted ? 'sound-toggle off' : 'sound-toggle on';

  button.addEventListener('click', () => {
    state.muted = !state.muted;
    button.className = state.muted ? 'sound-toggle off' : 'sound-toggle on';
    document
      .querySelectorAll('video')
      .forEach(setMutedState);
  });

  return button;
}

