/* ───────────────────────────────────────────────────────────────
   YOUR WORKS — this is the only file that holds content.

   Each work is one block between { and }. To add one, copy a
   block, paste it at the top of the list, change the values.
   To mark one sold: change  sold: false  to  sold: true

   image  → photo in the images/ folder: "images/filename.jpg"
   ratio  → shape of the photo: "1/1" square, "4/5" tall,
            "5/4" wide, "3/4" tall. Match the crop.
   buy    → Stripe Payment Link. Leave "" and no button shows.
   ─────────────────────────────────────────────────────────────── */

const WORKS = [

  {
    title: "Rituale",
    year:  "2023",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "EUR 1,000",
    image: "images/rituale-2023.jpg",
    ratio: "1/1",
    buy:   "",
    sold:  false
  }

];

/* ───────────────────────────────────────────────────────────────
   YOUR DETAILS — edit the text between the quotes.
   ─────────────────────────────────────────────────────────────── */

const STUDIO = {
  name:      "András Szelekovszky",
  intro:     "Painting and works on paper. Each piece is unique, signed and dated verso, and sent from Zürich.",
  terms:     "Card payment at checkout. Invoice and certificate with every sale. Shipping Switzerland CHF 25, EU from CHF 60, elsewhere quoted. Damage in transit: tell me within seven days and keep the packaging.",
  email:     "studio@your-domain.ch",
  instagram: "andrasszelekovszky"
};
