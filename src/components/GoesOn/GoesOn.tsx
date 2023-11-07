import * as Styled from "./GoesOn.styled";
import BodyPart from "./components/BodyPart";
import ResultFig from "./components/ResultFig";
import ResultDetails from "./components/ResultDetails";
import ResultActions from "./components/ResultActions";

const GoesOn: React.FC = () => {
  return (
    <Styled.GoesOn>
      <div className="generator">
        <BodyPart
          part="hat"
          img="data:image/jpeg;base64,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"
        />
        <BodyPart
          part="top"
          img="https://www.bfgcdn.com/1500_1500_90/017-2701-0511/patagonia-fitz-roy-icon-uprisal-hoody-hoodie.jpg"
        />
        <BodyPart
          part="trousers"
          img="https://www.stoneycreekhunting.co.nz/image/cache/catalog/product_images/lifestyle/mens/midlayer/trousers/Mens-Urban-Trousers-Black-LMM-0114-LTB-875x1000.jpg"
        />
        <BodyPart
          part="shoes"
          img="https://www.shutterstock.com/image-photo/vintage-red-shoes-on-white-260nw-92008067.jpg"
        />

        <button className="generate-btn">generate</button>
      </div>

      <div className="generator_result">
        <ResultFig />

        <ResultDetails />

        <ResultActions />
      </div>
    </Styled.GoesOn>
  );
};

export default GoesOn;
