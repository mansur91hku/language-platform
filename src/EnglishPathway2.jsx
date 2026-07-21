import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EnglishPathway2() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("pathwayOrigin", "pathway2");
    navigate("/english/pathway1/school", {
      replace: true,
      state: {
        direction: "up",
        previousPage: "/english/pathways",
      },
    });
  }, [navigate]);

  return null;
}