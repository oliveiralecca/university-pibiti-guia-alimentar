import { useEffect } from "react";

export const useLinkTarget = (className: string, desktopWidth = 768) => {
  useEffect(() => {
    const updateLinkTargets = () => {
      const links = document.querySelectorAll(`a.${className}`);
      if (window.innerWidth > desktopWidth) {
        links.forEach((link) => {
          (link as HTMLAnchorElement).setAttribute("target", "_blank");
        });
      } else {
        links.forEach((link) => {
          (link as HTMLAnchorElement).removeAttribute("target");
        });
      }
    };

    updateLinkTargets();

    window.addEventListener("resize", updateLinkTargets);

    return () => {
      window.removeEventListener("resize", updateLinkTargets);
    };
  }, [className, desktopWidth]);
};
