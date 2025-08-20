import React from "react";
import { CollageCont, CollageItem } from "./styles";
import CollageImage1 from "../../images/collage/collage1.png";
import CollageGif2 from "../../images/collage/collage2.gif";
import CollageImage3 from "../../images/collage/collage3.png";
import CollageGif4 from "../../images/collage/collage4.gif";
import CollageGif5 from "../../images/collage/collage5.gif";
import { collageItems } from "../../data";

const Collage = () => {
  // Sensible defaults using existing assets; will be overridden by data.js if provided
  const defaultItems = [
    { label: "Content Scheduling", img: CollageImage1, alt: "Scheduler" },
    { label: "Trivia Game Design", img: CollageGif2, alt: "Trivia Game" },
    { label: "Email Onboarding", img: CollageImage3, alt: "Email Onboarding" },
    { label: "Paywall Popup", img: CollageGif4, alt: "Paywall Popup" },
    {
      label: "Navigation Collapse",
      img: CollageGif5,
      alt: "Navigation Collapse",
    },
  ];

  // Use user-provided items if present; each item can have: { label, href?, src?, alt?, visible? }
  const items =
    Array.isArray(collageItems) && collageItems.length > 0
      ? collageItems.filter((i) => i?.visible !== false)
      : defaultItems;

  return (
    <CollageCont>
      {items.map((item, index) => {
        const label = item.label || `Item ${index + 1}`;
        const imgSrc = item.src || item.img; // support either external/public path (src) or imported (img)
        const alt = item.alt || label;
        const href = item.href;

        return (
          <CollageItem key={index} data-label={label}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                <img src={imgSrc} alt={alt} />
              </a>
            ) : (
              <img src={imgSrc} alt={alt} />
            )}
          </CollageItem>
        );
      })}
    </CollageCont>
  );
};

export { Collage };
