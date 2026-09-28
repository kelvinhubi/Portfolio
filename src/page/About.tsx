import { useEffect } from "react";
import { Content } from "./About/Content";
export const About = () => {
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfA3p1F0cuoCSKYBlxuZR0MLwRBznFIRolcfTfy9S5to1nxKXL8KfvjGa&s=10"; // Ensure it's a direct image URL
    document.title = "About";
  }, []);
  return (
    <div className="Main-Container">
      <div>{<Content />}</div>
    </div>
  );
};
