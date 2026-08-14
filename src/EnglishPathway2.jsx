import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEnglishYear } from "./utils/englishYear";

export default function EnglishPathway2() {
  const navigate = useNavigate();

  useEffect(() => {
    const year = getEnglishYear() || "2026";
    sessionStorage.setItem("pathwayOrigin", "pathway2");
    navigate(`/english/${year}/pathway2/school`, {
      replace: true,
      state: {
        direction: "up",
        previousPage: `/english/${year}/pathway2`,
      },
    });
  }, [navigate]);

  return null;
}