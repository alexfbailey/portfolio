/* ============================================================
   ALEX'S FINDS — data.js
   Shared item data. Included by both index.html and item.html.
   ============================================================

   HOW TO ADD YOUR OWN PHOTOS
   ──────────────────────────
   Set item.image = "images/your-photo.jpg"

   HOW TO ADD PURCHASE LINKS
   ──────────────────────────
   Replace "#" in each option's `link` field with the real
   Depop / Vestiaire / Poshmark / etc. URL.

   HOW TO ADD A NEW ITEM
   ──────────────────────────
   Copy any object in the array, change the fields, and add it.
   Categories: Outerwear, Tops, Bottoms, Sets, Accessories
   Collections: Paris Trip, Everyday Finds, Featured
   ============================================================ */

// ============================================================
// OUTFIT POSTS — shown in the Outfits feed tab
// Each post: outfitPhoto URL + up to 4 items
// ============================================================
const outfitPosts = [
  {
    outfitPhoto: '',
    items: [
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
    ]
  },
  {
    outfitPhoto: '',
    items: [
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
      { image: '', brand: 'Brand', price: '$— USD', link: '#' },
    ]
  },
];

const items = [
  {
    id: 1,
    name: "Sage Mongolian Fur Coat",
    category: "Outerwear",
    collection: "Featured",
    image: null,
    color: ["#8B9B7A", "#C5D1B8"],
    description:
      "A dreamy sage green coat with plush Mongolian lamb fur collar and cuffs. " +
      "This statement piece is the kind you keep forever — equally at home over " +
      "a midi slip dress or straight-leg jeans.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$120", link: "#" },
          { platform: "Poshmark", price: "$115", link: "#" },
      ]},
      { size: "S",  options: [
          { platform: "Vestiaire", price: "$145", link: "#" },
          { platform: "Depop",    price: "$130", link: "#" },
      ]},
      { size: "M",  options: [
          { platform: "Poshmark", price: "$110", link: "#" },
      ]},
      { size: "L",  options: [
          { platform: "The RealReal", price: "$160", link: "#" },
      ]},
    ],
  },
  {
    id: 2,
    name: "Dark Olive Longline Coat",
    category: "Outerwear",
    collection: "Paris Trip",
    image: null,
    color: ["#4A4E3A", "#6B7055"],
    description:
      "A sophisticated longline coat in deep olive. Belted at the waist for a " +
      "polished silhouette. Spotted in Paris, worn constantly since.",
    sizes: [
      { size: "XS", options: [{ platform: "Depop",    price: "$85", link: "#" }] },
      { size: "S",  options: [
          { platform: "Poshmark", price: "$90", link: "#" },
          { platform: "Depop",    price: "$80", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Vestiaire", price: "$105", link: "#" }] },
    ],
  },
  {
    id: 3,
    name: "Graphic Heart Sweatshirt",
    category: "Tops",
    collection: "Paris Trip",
    image: null,
    color: ["#2A2825", "#444038"],
    description:
      "Oversized black sweatshirt with a playful graphic print. The effortless " +
      "cool-girl piece that pairs with everything from olive cargos to wide-leg trousers.",
    sizes: [
      { size: "S",  options: [{ platform: "Depop",    price: "$45", link: "#" }] },
      { size: "M",  options: [
          { platform: "Depop",    price: "$42", link: "#" },
          { platform: "Poshmark", price: "$40", link: "#" },
      ]},
      { size: "L",  options: [{ platform: "Poshmark", price: "$38", link: "#" }] },
      { size: "XL", options: [{ platform: "Depop",    price: "$35", link: "#" }] },
    ],
  },
  {
    id: 4,
    name: "Linen Button-Up Jacket",
    category: "Outerwear",
    collection: "Paris Trip",
    image: null,
    color: ["#9E9890", "#B5AFA8"],
    description:
      "A relaxed linen jacket in warm gray — the perfect light layer for " +
      "transitional weather. Slightly oversized with structured shoulders.",
    sizes: [
      { size: "XS", options: [{ platform: "Vestiaire", price: "$75", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$65", link: "#" },
          { platform: "Poshmark", price: "$60", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",    price: "$62", link: "#" }] },
    ],
  },
  {
    id: 5,
    name: "Blue Denim Bermuda Shorts",
    category: "Bottoms",
    collection: "Paris Trip",
    image: null,
    color: ["#7A8FA5", "#9EB0C4"],
    description:
      "Classic mid-wash denim in a relaxed bermuda cut. These work with " +
      "absolutely everything — sneakers, loafers, sandals, you name it.",
    sizes: [
      { size: "24", options: [{ platform: "Depop",    price: "$35", link: "#" }] },
      { size: "25", options: [{ platform: "Poshmark", price: "$32", link: "#" }] },
      { size: "26", options: [
          { platform: "Depop",    price: "$30", link: "#" },
          { platform: "Vestiaire", price: "$38", link: "#" },
      ]},
      { size: "27", options: [{ platform: "Poshmark", price: "$28", link: "#" }] },
      { size: "28", options: [{ platform: "Depop",    price: "$28", link: "#" }] },
    ],
  },
  {
    id: 6,
    name: "Black Ribbed Sweater",
    category: "Tops",
    collection: "Everyday Finds",
    image: null,
    color: ["#2A2825", "#3D3A36"],
    description:
      "A slim-fit ribbed knit in classic black. The kind of foundational piece " +
      "every wardrobe needs — perfectly cropped to hit at the hip.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$28", link: "#" },
          { platform: "Poshmark", price: "$25", link: "#" },
      ]},
      { size: "S",  options: [{ platform: "Depop",    price: "$26", link: "#" }] },
      { size: "M",  options: [
          { platform: "Poshmark", price: "$24", link: "#" },
          { platform: "Depop",    price: "$22", link: "#" },
      ]},
    ],
  },
  {
    id: 7,
    name: "Yellow Pleated Midi Skirt",
    category: "Bottoms",
    collection: "Everyday Finds",
    image: null,
    color: ["#D4B84A", "#E8CC6A"],
    description:
      "A sunshine yellow pleated midi with beautiful drape. Pairs with a simple " +
      "ribbed knit or a boxy cropped shirt for an effortlessly polished look.",
    sizes: [
      { size: "XS", options: [{ platform: "Vestiaire", price: "$55", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$48", link: "#" },
          { platform: "Poshmark", price: "$45", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",    price: "$45", link: "#" }] },
      { size: "L",  options: [{ platform: "Poshmark", price: "$42", link: "#" }] },
    ],
  },
  {
    id: 8,
    name: "Gray Wide-Leg Trouser Set",
    category: "Sets",
    collection: "Everyday Finds",
    image: null,
    color: ["#A8A8A4", "#C2C2BF"],
    description:
      "A matching gray set — relaxed short-sleeve top and wide-leg trousers. " +
      "Effortlessly chic for everything from coffee to dinner.",
    sizes: [
      { size: "XS", options: [{ platform: "Depop",    price: "$65", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$62", link: "#" },
          { platform: "Vestiaire", price: "$70", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Poshmark", price: "$58", link: "#" }] },
    ],
  },
  {
    id: 9,
    name: "Cream Knit Cardigan",
    category: "Tops",
    collection: "Everyday Finds",
    image: null,
    color: ["#EDE5D8", "#F5EFE5"],
    description:
      "Buttery soft open-front cardigan in warm cream. Layer it over a slip " +
      "dress, button it up solo, or tie it at the waist — it does everything.",
    sizes: [
      { size: "XS", options: [{ platform: "Poshmark", price: "$42", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$38", link: "#" },
          { platform: "Poshmark", price: "$40", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",    price: "$35", link: "#" }] },
      { size: "L",  options: [{ platform: "Vestiaire", price: "$45", link: "#" }] },
    ],
  },
  {
    id: 10,
    name: "Blue Striped Oversized Shirt",
    category: "Tops",
    collection: "Everyday Finds",
    image: null,
    color: ["#8BA5C4", "#B0C5DA"],
    description:
      "A classic blue-and-white striped shirt in an oversized, slightly boxy " +
      "cut. The perfect Parisian-inspired staple — tuck it in, tie it at the " +
      "waist, or wear it fully open.",
    sizes: [
      { size: "XS", options: [{ platform: "Depop",    price: "$32", link: "#" }] },
      { size: "S",  options: [
          { platform: "Poshmark", price: "$30", link: "#" },
          { platform: "Depop",    price: "$28", link: "#" },
      ]},
      { size: "M",  options: [
          { platform: "Depop",    price: "$28", link: "#" },
          { platform: "Vestiaire", price: "$35", link: "#" },
      ]},
      { size: "L",  options: [{ platform: "Poshmark", price: "$25", link: "#" }] },
    ],
  },
  {
    id: 11,
    name: "Black Bike Shorts",
    category: "Bottoms",
    collection: "Everyday Finds",
    image: null,
    color: ["#2A2825", "#3A3835"],
    description:
      "High-waisted black bike shorts in smooth compressive fabric. A modern " +
      "wardrobe staple — wear them with an oversized shirt, cropped blazer, " +
      "or a chunky knit.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$20", link: "#" },
          { platform: "Poshmark", price: "$18", link: "#" },
      ]},
      { size: "S",  options: [{ platform: "Depop",    price: "$18", link: "#" }] },
      { size: "M",  options: [
          { platform: "Poshmark", price: "$16", link: "#" },
          { platform: "Depop",    price: "$18", link: "#" },
      ]},
      { size: "L",  options: [{ platform: "Depop",    price: "$16", link: "#" }] },
    ],
  },
  {
    id: 12,
    name: "Camel Wool Longline Coat",
    category: "Outerwear",
    collection: "Featured",
    image: null,
    color: ["#C4996A", "#D4AE88"],
    description:
      "A timeless camel coat in luxurious wool blend. Longline, relaxed fit " +
      "with a clean lapel collar. The coat you keep for a decade.",
    sizes: [
      { size: "XS", options: [{ platform: "Vestiaire",    price: "$180", link: "#" }] },
      { size: "S",  options: [
          { platform: "The RealReal", price: "$195", link: "#" },
          { platform: "Vestiaire",    price: "$175", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",        price: "$155", link: "#" }] },
      { size: "L",  options: [{ platform: "Poshmark",     price: "$145", link: "#" }] },
    ],
  },
];
