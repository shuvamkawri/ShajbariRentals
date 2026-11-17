import Header from "@/components/Header";
import Collections from "@/components/Collections";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { site, img, waLink, enquireLink, occasions, steps, rules } from "@/lib/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function Divider({ left }) {
  return <div className={`divider${left ? " left" : ""}`}><span>❖</span></div>;
}

export default function Home() {
  const reviewUrl = site.googleReviewUrl || site.googleProfileUrl;

  return (
    <>
      <Header />

      {/* ===== Hero ===== */}
      <section className="hero" id="home">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="petals" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => <span key={i} />)}
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-pill">✨ Ghatshila&apos;s Wedding Rental Studio</span>
            <p className="script">Shaadi ka har pal, royal andaaz mein</p>
            <h1>Riwaaz <span>Rentals</span></h1>
            <p className="hero-sub">
              Designer bridal lehengas, groom sherwanis &amp; heritage jewellery – <strong>on rent in Ghatshila</strong> for
              weddings, pre-wedding shoots, engagements, anniversaries &amp; every celebration.
            </p>
            <div className="hero-cta">
              <a href="#collections" className="btn btn-maroon">Explore Collection</a>
              <a href={waLink()} className="btn btn-whatsapp" {...ext}>WhatsApp 96087 75136</a>
            </div>
            <ul className="hero-badges">
              <li>✦ Dry-cleaned &amp; hygienic</li>
              <li>✦ Trial before booking</li>
              <li>✦ Wedding · Pre-wedding · Anniversary</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-ring" />
            <div className="hero-arch">
              <img src={img("stage-couple.jpg")} alt="Bride in red lehenga and groom in sherwani" />
            </div>
            <div className="hero-circle">
              <img src={img("hero-bride.jpg")} alt="Bride with maang tikka under veil" />
            </div>
            <div className="hero-chip">
              <strong>Bride &amp; Groom</strong>
              <span>Complete looks on rent</span>
            </div>
          </div>
        </div>
        <a href="#occasions" className="scroll-hint" aria-label="Scroll down"><span /></a>
      </section>

      {/* ===== Intro ===== */}
      <section className="intro">
        <div className="container intro-grid">
          <div className="intro-img reveal">
            <img src={img("palace-couple.jpg")} alt="Bride in red lehenga and groom in sherwani at a palace mandap" loading="lazy" />
            <div className="intro-frame" />
          </div>
          <div className="intro-text reveal">
            <p className="eyebrow">Welcome to Riwaaz</p>
            <h2>Dress for your dream wedding, <em>the smart way</em></h2>
            <Divider />
            <p>
              Riwaaz Rentals brings a beautiful collection of wedding wear and bridal jewellery to Ghatshila. Whether you are
              the bride, the groom, a bridesmaid or family – choose a look you love, wear it on your special day and return
              it after the celebration.
            </p>
            <p>
              Every piece is carefully cleaned, checked and fitted for you. Visit our store for a trial, or send us a WhatsApp
              message to see more designs.
            </p>
            <div className="price-note">
              <span className="price-icon">☎</span>
              <div>
                <strong>Rental prices are shared on call / WhatsApp only.</strong>
                <span>Charges depend on the outfit, dates and occasion – call us for the best offer.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Occasions ===== */}
      <section className="occasions" id="occasions">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Rentals For Every Celebration</p>
            <h2>Occasions We Dress You For</h2>
            <Divider />
            <p>From the first photoshoot to your anniversary party, Riwaaz has the right look for every occasion.</p>
          </div>
          <div className="occ-grid">
            {occasions.map((o) => (
              <a key={o.title} className="occ reveal" href={enquireLink(o.item)} {...ext}>
                <img src={img(o.img)} alt={o.title} loading="lazy" />
                <div className="occ-cap"><h3>{o.title}</h3><p>{o.text}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Collections />

      {/* ===== How it works ===== */}
      <section className="how" id="how">
        <div className="container">
          <div className="section-head light reveal">
            <p className="eyebrow">Simple &amp; Easy</p>
            <h2>How Renting Works</h2>
            <Divider />
          </div>
          <div className="steps">
            {steps.map(([title, text], i) => (
              <div key={title} className="step reveal">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* ===== Rules ===== */}
      <section className="rules" id="rules">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Please Read</p>
            <h2>Rental Rules &amp; Regulations</h2>
            <Divider />
            <p>To keep every outfit beautiful for every bride, we follow these simple rules.</p>
          </div>
          <div className="accordion reveal">
            {rules.map(([title, list], i) => (
              <details key={title} open={i === 0}>
                <summary><span>{String(i + 1).padStart(2, "0")}</span> {title}</summary>
                <ul>{list.map((r) => <li key={r}>{r}</li>)}</ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Google Business Profile ===== */}
      <section className="gbp reveal">
        <div className="container gbp-inner">
          <div className="gbp-text">
            <div className="g-logo" aria-hidden="true">
              <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
            </div>
            <h3>Find us on Google</h3>
            <p>Loved your Riwaaz look? Share your experience on our Google Business Profile – it helps other brides find us!</p>
          </div>
          <div className="gbp-btns">
            <a className="btn btn-gold" href={site.googleProfileUrl} {...ext}>⭐ View on Google</a>
            <a className="btn btn-outline-dark" href={reviewUrl} {...ext}>✍ Write a Review</a>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <p className="eyebrow">Get In Touch</p>
            <h2>Visit Riwaaz Rentals</h2>
            <Divider left />
            <div className="owner">
              <div className="avatar">SK</div>
              <div><strong>{site.owner}</strong><span>Owner, Riwaaz Rentals</span></div>
            </div>
            <ul className="contact-list">
              <li><span className="ic">📞</span><div><small>Mobile / WhatsApp</small><a href={`tel:${site.phoneRaw}`}>{site.phone}</a></div></li>
              <li><span className="ic">✉️</span><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
              <li><span className="ic">📍</span><div><small>Address</small><span>Kashida, Near Women&apos;s College Road,<br />Ghatshila, Jharkhand</span></div></li>
            </ul>
            <div className="contact-btns">
              <a className="btn btn-whatsapp" href={waLink()} {...ext}>WhatsApp Now</a>
              <a className="btn btn-maroon" href={`tel:${site.phoneRaw}`}>Call Now</a>
              <a className="btn btn-outline-dark" href={site.googleProfileUrl} {...ext}>Get Directions</a>
            </div>
          </div>
          <div className="map reveal">
            <iframe title="Riwaaz Rentals location – Kashida, Ghatshila" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" className="logo light"><span className="logo-mark">R</span><span className="logo-text">Riwaaz <em>Rentals</em></span></a>
            <p>Wedding, pre-wedding, engagement &amp; anniversary wear and bridal jewellery on rent in Ghatshila. Look royal, spend smart.</p>
          </div>
          <div>
            <h4>Outfits</h4>
            <ul><li>Bridal Lehenga</li><li>Groom Sherwani</li><li>Wedding Sarees</li><li>Reception Gowns</li><li>Indo-Western</li><li>Bridesmaid Dresses</li></ul>
          </div>
          <div>
            <h4>Jewellery &amp; More</h4>
            <ul><li>Bridal Jewellery Sets</li><li>Maang Tikka</li><li>Kundan Sets</li><li>Kalire</li><li>Wedding Handbags</li><li>Sehra &amp; Pagdi</li></ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${site.phoneRaw}`}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>Kashida, Near Women&apos;s College Road, Ghatshila</li>
              <li><a href={site.googleProfileUrl} {...ext}>Google Business Profile ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} Riwaaz Rentals, Ghatshila. All rights reserved.</div>
      </footer>

      {/* Floating buttons */}
      <a className="float-wa" href={waLink()} {...ext} aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff"><path d="M16.04 3C9.4 3 4 8.37 4 15c0 2.34.68 4.6 1.95 6.55L4 29l7.66-1.92A12.06 12.06 0 0 0 16.04 27C22.67 27 28 21.63 28 15S22.67 3 16.04 3zm0 21.8c-1.8 0-3.56-.48-5.1-1.4l-.37-.22-4.550 1.14 1.2-4.42-.24-.38A9.7 9.7 0 0 1 5.9 15c0-5.5 4.55-9.97 10.14-9.970 5.58 0 10.1 4.47 10.1 9.970 0 5.52-4.52 9.8-10.1 9.8zm5.56-7.33c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.62-.93-2.22-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.22 5.13 4.52.72.3 1.28.5 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.25-.7.25-1.32.18-1.44-.07-.13-.27-.2-.57-.35z" /></svg>
      </a>
      <a className="float-call" href={`tel:${site.phoneRaw}`} aria-label="Call Riwaaz Rentals">📞</a>

      <Reveal />
    </>
  );
}
