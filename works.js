/* ───────────────────────────────────────────────────────────────
   YOUR WORKS — this is the only file you need to edit.

   To add a work: copy one block between { and }, paste it at the
   top of the list, change the values. Keep the commas.
   To remove a work: delete its whole block.
   To mark one sold: change  sold: false  to  sold: true

   image  → put the photo in the images/ folder of the repo,
            then write "images/your-filename.jpg" here.
            Leave it as ""  to show an empty grey plate.
   ratio  → shape of the photo: "4/5" tall, "1/1" square,
            "5/4" wide, "3/4" tall. Match your photo.
   buy    → your Stripe Payment Link for this work.
            Leave "" and no Acquire button shows.
   ─────────────────────────────────────────────────────────────── */

const WORKS = [

  {
    title: "Untitled (Morning Field)",
    year:  "2026",
    medium:"Oil on linen",
    size:  "80 × 65 cm",
    price: "CHF 2,400",
    image: "",
    ratio: "4/5",
    buy:   "",
    sold:  false
  },

  {
    title: "Study for a Window I",
    year:  "2026",
    medium:"Gouache and graphite on Arches 300 g",
    size:  "56 × 42 cm",
    price: "CHF 780",
    image: "",
    ratio: "3/4",
    buy:   "",
    sold:  false
  },

  {
    title: "Nocturne (Limmat)",
    year:  "2025",
    medium:"Oil on panel",
    size:  "50 × 50 cm",
    price: "CHF 1,600",
    image: "",
    ratio: "1/1",
    buy:   "",
    sold:  true
  },

  {
    title: "Interior, Late Light",
    year:  "2025",
    medium:"Oil on linen",
    size:  "110 × 140 cm",
    price: "CHF 4,900",
    image: "",
    ratio: "5/4",
    buy:   "",
    sold:  false
  },

  {
    title: "Ink Drawing (Sheet 4)",
    year:  "2024",
    medium:"Indian ink on Fabriano",
    size:  "42 × 30 cm",
    price: "CHF 420",
    image: "",
    ratio: "3/4",
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
  terms:     "Card payment in CHF at checkout. Invoice and certificate with every sale. Shipping Switzerland CHF 25, EU from CHF 60, elsewhere quoted. Damage in transit: tell me within seven days and keep the packaging.",
  email:     "studio@your-domain.ch",
  instagram: "andrasszelekovszky"
};
