/* ============================================================
   Riwaaz Rentals – site settings (edit here)
   👉 GOOGLE_PROFILE_URL: Google Maps → your business → Share → Copy link
   👉 GOOGLE_REVIEW_URL:  Business Profile → Ask for reviews → Copy link
   ============================================================ */
export const site = {
  name: "Riwaaz Rentals",
  owner: "Shuvam Kawri",
  phone: "+91 96087 75136",
  phoneRaw: "+919608775136",
  whatsapp: "919608775136",
  email: "shuvam5kawri@gmail.com",
  address: "Kashida, Near Women's College Road, Ghatshila, Jharkhand",
  googleProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Riwaaz+Rentals+Kashida+Ghatshila",
  googleReviewUrl: "", // leave empty to use the profile link
  mapEmbed:
    "https://maps.google.com/maps?q=Kashida%2C%20Ghatshila%2C%20Jharkhand&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const img = (file) => `${basePath}/images/${file}`;

export const waLink = (text = "Hello Riwaaz Rentals, I want to enquire about rentals.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const enquireLink = (item) =>
  waLink(`Hello Riwaaz Rentals, I am interested in renting: ${item}. Please share designs and rent details.`);

export const occasions = [
  { title: "Wedding Rentals", item: "Wedding outfit / jewellery", img: "kalire.jpg", text: "Bridal lehenga, sherwani, jewellery, kalire, sehra & more" },
  { title: "Pre-Wedding Shoot", item: "Pre-wedding shoot outfit", img: "sehra-pagdi.jpg", text: "Couple outfits, gowns & ethnic looks for your photoshoot" },
  { title: "Engagement & Roka", item: "Engagement / Ring ceremony outfit", img: "kundan-set.jpg", text: "Elegant lehengas, Indo-western & kundan sets" },
  { title: "Haldi & Mehndi", item: "Haldi / Mehndi outfit", img: "bengali-bride.jpg", text: "Bright, festive outfits & light jewellery" },
  { title: "Sangeet & Reception", item: "Sangeet / Reception outfit", img: "reception-gown.jpg", text: "Shimmering gowns & party-ready fusion wear" },
  { title: "Anniversary & Parties", item: "Anniversary / party outfit", img: "couple.jpg", text: "Sarees, sherwanis, gowns for anniversaries, birthdays & family functions" },
];

export const outfits = [
  { title: "Bridal Lehenga", img: "bridal-lehenga.jpg", tag: "Bestseller", text: "Heavy embroidered lehengas in classic reds, maroons & pastel shades for your wedding day." },
  { title: "Groom Sherwani", img: "groom-sherwani.jpg", text: "Royal sherwanis with embroidery, matching dupatta & mala – look every bit the dulha." },
  { title: "Wedding Sarees", img: "wedding-saree.jpg", text: "Silk, Banarasi & designer sarees for the bride and the women of the family." },
  { title: "Reception Gowns", img: "reception-gown.jpg", tag: "New", text: "Shimmering, elegant gowns that make your reception entry unforgettable." },
  { title: "Indo-Western Outfits", img: "indo-western.jpg", text: "Stylish fusion looks for sangeet, cocktail, engagement & party nights." },
  { title: "Bridesmaid Dresses", img: "bridesmaid.jpg", text: "Coordinated, graceful outfits for sisters & friends of the bride." },
];

export const jewellery = [
  { title: "Bridal Jewellery Sets", img: "bride-kundan-choker.jpg", tag: "Bestseller", text: "Complete bridal sets – necklace, earrings, nath & more – to match your outfit." },
  { title: "Maang Tikka", img: "maang-tikka.jpg", text: "Delicate to statement tikkas & matha pattis that frame the bridal look." },
  { title: "Kundan Sets", img: "kundan-set.jpg", text: "Regal kundan & polki-style necklace sets with matching earrings and tikka." },
  { title: "Kalire", img: "kalire.jpg", text: "Beautiful golden kalire that sway with every step of the bride." },
  { title: "Wedding Handbags", img: "wedding-handbag.jpg", text: "Embellished potlis & clutches to complete your wedding outfit." },
  { title: "Sehra & Pagdi", img: "sehra-pagdi.jpg", text: "Safas, pagdis & sehras with kalgi to crown the groom's look." },
];

export const gallery = [
  ["hero-bride.jpg", "Bride under red veil with maang tikka"],
  ["gold-jewellery.jpg", "Gold bridal necklace with Banarasi saree"],
  ["kundan-set.jpg", "Bride in kundan jewellery set"],
  ["sehra-pagdi.jpg", "Bride and groom in wedding attire"],
  ["bengali-bride.jpg", "Bride in traditional saree with mukut"],
  ["bride-kundan-choker.jpg", "Bride wearing kalire and choker set"],
  ["kalire.jpg", "Bride in red lehenga with kalire"],
  ["wedding-saree.jpg", "Bride in red wedding saree"],
  ["bridal-lehenga.jpg", "Bride in pink bridal lehenga"],
];

export const steps = [
  ["Call or WhatsApp", "Tell us your event date and what you are looking for. We share designs & rent details."],
  ["Visit & Trial", "Come to our Kashida store, try the outfits and jewellery, and choose your favourite."],
  ["Book Your Date", "Pay the booking advance with a valid ID proof to block your outfit for your dates."],
  ["Wear & Return", "Pick it up before the function, shine on your big day and return it on time."],
];

export const rules = [
  ["Booking & Advance", [
    "Booking is confirmed only after payment of the booking advance.",
    "Rental charges are informed on call / WhatsApp / in store only.",
    "Outfits and jewellery are reserved on a first-come, first-served basis for your dates.",
    "The booking advance is non-refundable if the booking is cancelled.",
  ]],
  ["ID Proof & Security Deposit", [
    "An original government ID (Aadhaar / Voter ID / Driving Licence) is required at the time of pickup.",
    "A refundable security deposit must be paid at pickup.",
    "The deposit is returned after the items are returned and checked.",
  ]],
  ["Rental Period & Late Return", [
    "The rental period is fixed at the time of booking (pickup date to return date).",
    "Items must be returned on or before the agreed date and time.",
    "Late returns are charged extra per day, which will be deducted from the security deposit.",
  ]],
  ["Care, Damage & Loss", [
    "Please handle outfits and jewellery with care. Keep them away from food stains, perfume sprays, mehndi and water.",
    "Do not wash, dry-clean, iron, cut, stitch or alter any item yourself.",
    "Minor wear is acceptable. Tears, burns, heavy stains or missing stones/parts will be charged as per repair cost.",
    "If any item is lost or badly damaged, the full cost of the item will be charged.",
    "Jewellery must be returned with all pieces – earrings, tikka, nath, kalire etc. – in the given box.",
  ]],
  ["Trial, Fitting & Cleaning", [
    "Trials are available in store before booking. Please call before visiting.",
    "Small fitting adjustments (if possible) are done by our team only.",
    "Every item is professionally cleaned before it is given to you – cleaning is included.",
  ]],
  ["Other Terms", [
    "Items cannot be sub-let or given to anyone else.",
    "Please check items at pickup – complaints after pickup will not be accepted.",
    "Images on this website are for reference; actual designs available in store may vary.",
    "Riwaaz Rentals reserves the right to change these rules at any time.",
  ]],
];
