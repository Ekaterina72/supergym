const createVideoIframe = (container, replacingElement) => {
  const videoLink = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  const videoFrame = document.createElement('iframe');
  videoFrame.src = videoLink;
  videoFrame.setAttribute('allowfullscreen', '');
  videoFrame.classList.add('video__frame');
  videoFrame.setAttribute('allow', 'autoplay');
  replacingElement.remove();
  container.append(videoFrame);
};

const initVideo = () => {
  const videoContainer = document.querySelector('[data-video-container]');
  const videoLinkElement = document.querySelector('[data-video-link]');
  const videoButtonElement = document.querySelector('[data-video-button]');

  videoLinkElement.removeAttribute('href');
  videoContainer.classList.add('is--active');

  videoContainer.addEventListener('click', () => {
    createVideoIframe(videoContainer, videoLinkElement);
    videoButtonElement.remove();
  });
};

export {initVideo};
