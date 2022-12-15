import { useTranslation } from "react-i18next";
import { LoremIpsum } from "react-lorem-ipsum";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation()

  return (
    <>
      <div id="banner">
        <h1>{t("InsightsAgentHeader")}</h1>
        <p id="intro">
          <LoremIpsum />
        </p>
      </div>
    </>
  );
}
