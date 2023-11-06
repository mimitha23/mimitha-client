interface OnIterationArgsT {
  figure: HTMLElement;
  imgNode: HTMLImageElement;
}

function calcImageDimension() {
  const galleryImageFigures: Array<HTMLElement> = Array.from(
    document.querySelectorAll(".gallery-list__item")
  );

  let imagesToLoad: number = galleryImageFigures.length;

  const onIteration = ({ imgNode, figure }: OnIterationArgsT) => {
    imagesToLoad -= 1;
    addClassName({ imgNode, figure });
  };

  if (!imagesToLoad) return;

  galleryImageFigures.forEach((figure) => {
    const imgNode: HTMLImageElement | null = figure.querySelector("img");

    if (!imgNode) return;
    else if (imgNode.complete) onIteration({ imgNode, figure });
    else
      imgNode.addEventListener("load", function () {
        onIteration({ imgNode, figure });
      });
  });
}

export default calcImageDimension;

function addClassName({ imgNode, figure }: OnIterationArgsT) {
  const { naturalWidth: width, naturalHeight: height } = imgNode;
  figure.classList.add(generateClassName(width, height));
}

function generateClassName(width: number, height: number): string {
  if (height > width) return "gallery-img--portrate";
  else if (width / height < 1.7) return "gallery-img--landscape";
  else if (width / height > 1.7) return "gallery-img--landscapeLarge";
  else return "";
}
