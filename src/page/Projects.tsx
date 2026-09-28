import { Content } from "./Projects/Content";
import { useEffect } from "react";
export const Projects = () => {
  useEffect(() => {
    // 1. Safe selector that catches "icon" or "shortcut icon"
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");

    // 2. Fallback check: if the tag doesn't exist, create it so your app doesn't crash
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    // 3. Update the link and the title
    link.href = "https://cdn-icons-png.flaticon.com/512/1087/1087927.png"; // Ensure it's a direct image URL
    document.title = "Projects";
  }, []);
  return (
    <div className="Main-Container">
      <div>{<Content />}</div>
    </div>
  );
};
