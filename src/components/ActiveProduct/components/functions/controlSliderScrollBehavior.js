export default function controlSliderScrollBehavior({
  sliderIndex,
  sliderIndexLastSnapShot,
  sliderContainer,
  itemsQuantity,
}) {
  const goingBack =
    sliderIndex < sliderIndexLastSnapShot &&
    sliderIndexLastSnapShot !== itemsQuantity;

  const isOnLastItem = sliderIndexLastSnapShot === itemsQuantity;

  const goingForward = sliderIndex > sliderIndexLastSnapShot;

  const docIndexToQuery = goingBack
    ? sliderIndex - 1
    : isOnLastItem
    ? sliderIndex + 1
    : goingForward
    ? sliderIndex + 1
    : 0;

  if (docIndexToQuery === 0) {
    sliderContainer.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  } else if (docIndexToQuery === itemsQuantity) {
    sliderContainer.scrollTo({
      left: sliderContainer.scrollWidth,
      top: sliderContainer.scrollHeight,
      behavior: "smooth",
    });
  } else {
    const el = document.querySelector(`.slider-fig--${docIndexToQuery}`);

    if (!el) return;

    el.scrollIntoView({ block: "end", behavior: "smooth" });
  }
}
