import { useTranslation } from "react-i18next";

export default function FormDevider() {
  const { t } = useTranslation();

  return (
    <div className="auth-popup__form-devider">
      <hr />
      <span>{t("auth.or")}</span>
      <hr />
    </div>
  );
}
