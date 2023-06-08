function calcImageDimention(finishAlert) {
  const galleryImageFigures = Array.from(
    document.querySelectorAll(".gallery-list__item")
  );

  let imagesToLoad = galleryImageFigures.length;

  function onIteation({ imgNode, figure }) {
    imagesToLoad -= 1;
    addClassname({ imgNode, figure });

    if (finishAlert && imagesToLoad === 0) finishAlert();
  }

  if (!imagesToLoad) return;

  galleryImageFigures.forEach((figure) => {
    const imgNode = figure.querySelector("img");

    if (imgNode.complete) onIteation({ imgNode, figure });
    else
      imgNode.addEventListener("load", function () {
        onIteation({ imgNode, figure });
      });
  });
}

export default calcImageDimention;

function addClassname({ imgNode, figure }) {
  const { naturalWidth: width, naturalHeight: height } = imgNode;
  figure.classList.add(generateClassname(width, height));
}

function generateClassname(width, height) {
  if (height > width) return "gallery-img--portrate";
  else if (width / height < 1.7) return "gallery-img--landscape";
  else if (width / height > 1.7) return "gallery-img--landscapeLarge";
}
