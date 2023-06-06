function calcImageDimention(finishAlert) {
  const galleryImageFigures = Array.from(
    document.querySelectorAll(".gallery-fig")
  );

  let imagesToLoad = galleryImageFigures.length;

  galleryImageFigures[0] &&
    galleryImageFigures.forEach((figure) => {
      const imgNode = figure.querySelector("img");

      if (imgNode.complete) imagesToLoad -= 1;
      else {
        imgNode.addEventListener("load", function (e) {
          imagesToLoad -= 1;
          if (imagesToLoad === 0) {
            generateClassname(galleryImageFigures);
            finishAlert();
          }
        });
      }

      if (imagesToLoad === 0) {
        generateClassname(galleryImageFigures);
        finishAlert();
      }
    });
}

export default calcImageDimention;

function generateClassname(figures) {
  figures.forEach((figure) => {
    const imgNode = figure.querySelector("img");
    const { naturalWidth: width, naturalHeight: height } = imgNode;

    if (height > width) figure.classList.add("gallery-img--portrate");
    else if (width / height < 1.7)
      figure.classList.add("gallery-img--landscape");
    else if (width / height > 1.7)
      figure.classList.add("gallery-img--landscapeLarge");
  });
}
