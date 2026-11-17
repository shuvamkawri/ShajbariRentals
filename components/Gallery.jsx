"use client";
import { useEffect, useState } from "react";
import { gallery, img } from "@/lib/site";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Lookbook</p>
          <h2>Bridal Moments</h2>
          <div className="divider"><span>❖</span></div>
          <p>A glimpse of the looks you can create with Riwaaz.</p>
        </div>
        <div className="masonry">
          {gallery.map(([file, alt]) => (
            <img key={file} src={img(file)} alt={alt} loading="lazy" onClick={() => setActive({ file, alt })} />
          ))}
        </div>
      </div>

      <div className={`lightbox${active ? " open" : ""}`} aria-hidden={!active} onClick={() => setActive(null)}>
        <button className="lb-close" aria-label="Close">×</button>
        {active && <img src={img(active.file)} alt={active.alt} onClick={(e) => e.stopPropagation()} />}
      </div>
    </section>
  );
}
