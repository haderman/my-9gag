const ALL_ARTICLES_SELECTOR = '#react-root > section > main > section article';
const ARTICLES_CONTAINER_SELECTOR = `
  #react-root > section > main > section
  > div.CZW53.N2s2W > div.qF0y9.Igw0E.IwRSH.eGOV_.acqo5._4EzTm
  > div:nth-child(1) > div
`;

const observer = new MutationObserver(([mutation]) => showControls());
observer.observe(document.querySelector(ARTICLES_CONTAINER_SELECTOR), { childList: true });

function showControls() {
  document
    .querySelectorAll(ALL_ARTICLES_SELECTOR)
    .forEach($article => {
      const $video = $article.querySelector('video');

      if (!$video) return;

      $video.controls = true;

      $article.querySelector('.PyenC')?.remove?.();
      $article.querySelector('div[aria-label=Control]')?.remove?.();
    });
}

