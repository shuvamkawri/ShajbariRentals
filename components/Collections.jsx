"use client";
import { useState } from "react";
import { outfits, jewellery, img, enquireLink, site, waLink } from "@/lib/site";

function Card({ p }) {
  return (
    <article className="card reveal visible">
      <div className="card-img">
        <img src={img(p.img)} alt={`${p.title} on rent`} loading="lazy" />
        {p.tag && <span className="tag">{p.tag}</span>}
      </div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <a className="enquire" href={enquireLink(p.title)} target="_blank" rel="noopener noreferrer">
          Enquire on WhatsApp →
        </a>
      </div>
    </article>
  );
}

export default function Collections() {
  const [tab, setTab] = useState("outfits");
  const items = tab === "outfits" ? outfits : jewellery;

  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Our Collection</p>
          <h2>Available on Rent</h2>
          <div className="divider"><span>❖</span></div>
          <p>Tap <strong>Enquire</strong> on any item to ask about designs, sizes &amp; availability on WhatsApp.</p>
        </div>

        <div className="tabs reveal" role="tablist">
          <button className={`tab${tab === "outfits" ? " active" : ""}`} onClick={() => setTab("outfits")} role="tab">
            Wedding Outfits
          </button>
          <button className={`tab${tab === "jewellery" ? " active" : ""}`} onClick={() => setTab("jewellery")} role="tab">
            Jewellery &amp; Accessories
          </button>
        </div>

        <div className="grid tab-panel active" key={tab}>
          {items.map((p) => <Card key={p.title} p={p} />)}
        </div>

        <p className="no-price reveal">
          ✦ We do not display rental prices online. <a href={`tel:${site.phoneRaw}`}>Call</a> or{" "}
          <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a> 96087 75136 to know the rent. ✦
        </p>
      </div>
    </section>
  );
}
