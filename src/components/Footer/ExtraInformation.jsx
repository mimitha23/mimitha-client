import { useTranslation } from "react-i18next";

export default function ExtraInformation() {
  const { t } = useTranslation();

  return (
    <div className="footer__extra-info">
      <h2>{t("footer.editional_info")}</h2>
      <ul>
        <li>{t("footer.about_us")}</li>
        <li>{t("footer.contact")}</li>
        <li>{t("footer.help")}</li>
      </ul>
    </div>
  );
}
