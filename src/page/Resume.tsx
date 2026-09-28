import { Content } from "./Resume/Content";
import { useEffect } from "react";
export const Resume = () => {
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
    link.href =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzurtxGe5cbKj3ivPzSksGyCdfJTVYblUkpRmJPgSuIuKusa0ITZLQZbM&s=10"; // Ensure it's a direct image URL
    document.title = "Resume";
  }, []);
  return (
    <div className="Main-Container">
      <div>{<Content />}</div>
    </div>
  );
};
