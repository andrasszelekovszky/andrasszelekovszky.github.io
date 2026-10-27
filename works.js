/* ───────────────────────────────────────────────────────────────
   YOUR WORKS — this is the only file that holds content.

   Each work is one block between { and }. To add one, copy a
   block, paste it at the top of the list, change the values.
   To mark one sold: change  sold: false  to  sold: true

   image  → front of the work: "images/filename.jpg"
   verso  → back of the work, second slide. Always send both.
   ratio  → shape of the photos: "1/1" square, "4/5" tall,
            "5/4" wide, "3/4" tall. Match the crop.

   ref    → the work's inventory number, AS-<year>-<nn>. It is
            permanent: once a work has one, never change it, even
            if the work is sold or the order on the site changes.
            For a new work, take the next free number of its year.

   Every available work shows an Enquire button that opens an
   email to you quoting that reference, so you always know which
   work someone means even when several share a title.
   ─────────────────────────────────────────────────────────────── */

const WORKS = [

  {
    ref:   "AS-2026-01",
    title: "Rituale",
    year:  "2026",
    medium:"Oil on canvas",
    size:  "30 × 40 cm",
    price: "CHF 1,250",
    image: "images/rituale-2026.jpg",
    verso: "",
    ratio: "4/3",
    sold:  false
  },

  {
    ref:   "AS-2025-03",
    title: "Momentum",
    year:  "2025",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/momentum-2025-03.jpg",
    verso: "",
    ratio: "1/1",
    sold:  false
  },

  {
    ref:   "AS-2025-02",
    title: "Momentum",
    year:  "2025",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/rituale-2025-b.jpg",
    verso: "",
    ratio: "1/1",
    sold:  true
  },

  {
    ref:   "AS-2025-01",
    title: "Momentum",
    year:  "2025",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/rituale-2025.jpg",
    verso: "",
    ratio: "1/1",
    sold:  true
  },

  {
    ref:   "AS-2024-03",
    title: "Rituale",
    year:  "2024",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/rituale-2024-c.jpg",
    verso: "",
    ratio: "1/1",
    sold:  false
  },

  {
    ref:   "AS-2024-02",
    title: "Rituale",
    year:  "2024",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/rituale-2024-b.jpg",
    verso: "",
    ratio: "1/1",
    sold:  false
  },

  {
    ref:   "AS-2024-01",
    title: "Rituale",
    year:  "2024",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/rituale-2024.jpg",
    verso: "",
    ratio: "1/1",
    sold:  false
  },

  {
    ref:   "AS-2023-01",
    title: "Rituale",
    year:  "2023",
    medium:"Oil on canvas",
    size:  "10 × 10 cm",
    price: "CHF 950",
    image: "images/rituale-2023.jpg",
    verso: "images/rituale-2023-verso.jpg",
    ratio: "1/1",
    sold:  false
  }

];

/* ───────────────────────────────────────────────────────────────
   YOUR DETAILS — edit the text between the quotes.
   ─────────────────────────────────────────────────────────────── */

const STUDIO = {
  name:      "András Szelekovszky",
  intro:     "",
  terms:     "Works are sold directly from the studio. Write about any piece and I will confirm availability, shipping and payment by bank transfer. An invoice and a certificate of authenticity come with every sale. Shipping Switzerland CHF 25, EU from CHF 60, elsewhere quoted.",
  email:     "andras.szelekovszky@gmail.com",
  instagram: "andrasszelekovszky"
};
