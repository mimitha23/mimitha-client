import { Link } from "react-router-dom";
import { useTranslationContext } from "providers/I18nextProvider";

export default function ProductTitle({ title }) {
  const { currentLocale } = useTranslationContext();

  return (
    <h2 className="product-title" title={title[currentLocale]}>
      <Link to="/products/:productId" className="product-content__title-link">
        {title[currentLocale]}
      </Link>
    </h2>
  );
}
