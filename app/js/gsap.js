function titleAnimationFunc(selector, wordOrChar = ".word", anim) {
  const splitText = new SplitType(selector);
  const title = document.querySelector(selector);
  title.querySelectorAll(wordOrChar).forEach((word, i) => {
    word.classList.add("wow");
    // word.classList.add("hidden");
    word.classList.add(anim);
    word.style.animationName = anim;

    word.dataset.wowDuration = `1s`;
    i++;
    // i++;
    word.dataset.wowDelay = `${i * 1}00ms`;
      
    intersectionObserver.disconnect(document.querySelector(selector));
  });
}

function lineAnimationFunc(selector, anim, delay = '500ms', duration = '1s') {
  const title = document.querySelector(selector);
  // title.querySelectorAll(wordOrChar).forEach((word, i) => {
    title.classList.add("wow");
    title.classList.add(anim);
    title.style.animationName = anim;

    title.dataset.wowDuration = duration;
    // i++;
    // i++;
    title.dataset.wowDelay = `${delay}`;
      
    intersectionObserver.disconnect(document.querySelector(selector));
  // });
}