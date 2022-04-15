document
  .querySelectorAll('video')
  .forEach(showControls);

const observer = new MutationObserver(([mutation]) => {
  mutation
    .addedNodes
    .forEach(node =>
      node
        .querySelectorAll('video')
        .forEach(showControls)
  );
}, config);

observer.observe(
  document.getElementById('list-view-2'),
  { childList: true }
);

function showControls($video) {
  $video.controls = true;
}
