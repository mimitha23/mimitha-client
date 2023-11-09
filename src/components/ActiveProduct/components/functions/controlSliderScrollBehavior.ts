type ControlSliderScrollBehaviorArgsT = {
  sliderIndex: number;
  sliderIndexLastSnapShot: number;
  sliderContainer: HTMLUListElement | null;
  itemsQuantity: number;
};

export default function controlSliderScrollBehavior({
  sliderIndex,
  itemsQuantity,
  sliderContainer,
  sliderIndexLastSnapShot,
}: ControlSliderScrollBehaviorArgsT) {
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

  if (docIndexToQuery === 0 && sliderContainer) {
    sliderContainer.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } else if (docIndexToQuery === itemsQuantity && sliderContainer) {
    sliderContainer.scrollTo({
      behavior: "smooth",
      left: sliderContainer.scrollWidth,
      top: sliderContainer.scrollHeight,
    });
  } else {
    const el = document.querySelector(`.slider-fig--${docIndexToQuery}`);

    if (!el) return;

    el.scrollIntoView({ block: "end", behavior: "smooth" });
  }
}
