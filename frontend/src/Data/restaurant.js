import piccolo from "../assets/piccolo.webp";
import piccolodish from "../assets/piccolodish.webp";
import sakana1 from "../assets/sakana1.webp";
import sakana2 from "../assets/sakana2.webp";
import sakana3 from "../assets/sakana3.webp";
import sakana4 from "../assets/sakana4.webp";
import bgfactory1 from "../assets/Bgfactory1.webp";
import bgfactory2 from "../assets/Bgfactory2.webp";
import bgfactory3 from "../assets/Bgfactory3.webp";
import bgfactory4 from "../assets/Bgfactory4.webp";
import babka1 from "../assets/Babka1.webp";
import babka2 from "../assets/Babka2.webp";
import babka3 from "../assets/Babka3.webp";
import babka4 from "../assets/Babka4.webp";
import nova1 from "../assets/Nova1.webp";
import nova2 from "../assets/Nova2.webp";
import nova3 from "../assets/Nova3.webp";
import coco1 from "../assets/Coco1.webp";
import coco2 from "../assets/Coco2.webp";
import coco3 from "../assets/Coco3.webp";

export const restaurants = [
  {
    id: 1,
    name: "Da Luna Restaurant",
    cuisine: "Italian • Continental",
    rating: 4.5,
    reviews: 1840,
    location: "Anjuna, Goa",
    hours: "9:00 AM - 9:00 AM",
    phone: "+919356712345",

    googleLink:
      "https://www.google.com/search?q=Da+Luna+Restaurant",

    instagram:
      "https://www.instagram.com/daluna.goa/",

    offer: "10% OFF",

    image:
      "https://b.zmtcdn.com/data/pictures/4/22456694/88e7f8f780353794a92f982a2f5df495.jpg",

    gallery: [
      "https://b.zmtcdn.com/data/pictures/4/22456694/88e7f8f780353794a92f982a2f5df495.jpg",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    ],

    description:
      "An elegant Italian fine-dining spot in Anjuna serving wood-fired pizzas, handmade pasta, curated wines and candle-lit seaside dinners. Ideal for date nights and premium dining experiences in Goa.",

    tags: [
      "Italian",
      "Fine Dining",
      "Wine Bar",
      "Romantic",
      "Outdoor Seating"
    ]
  },

  {
    id: 6,
    name: "Burger Factory",
    cuisine: "Burgers • American • Fast Casual",
    rating: 4.3,
    reviews: 980,
    location: "Morjim, Goa",
    hours: "Tuesday - Sunday, 1:00 PM - 10:00 PM",
    phone: "087886 30791",

    googleLink:
      "https://share.google/KvNktMUH0P3yOO7Nl",

    instagram:
      "https://www.instagram.com/burgerfactorygoa/?hl=en",

    offer: "10% OFF",

    image: bgfactory3,

    gallery: [
      bgfactory1,
      bgfactory2,
      bgfactory3,
      bgfactory4,
    ],

    description:
      "A popular Morjim burger spot where juicy gourmet burgers, beachside ambience and sunset views come together for a relaxed Goan evening.",

    tags: [
      "Burgers",
      "Beachside",
      "Sunset Dining",
      "Casual",
      "Friends"
    ],

    bestTime: "Late afternoon to evening is ideal if you want to enjoy a burger and stay on for the sunset over the Arabian Sea.",

    mustTry: [
      "Cheddar Burger",
      "Blue Cheese Burger",
      "Classic Chicken Burger",
      "Double Cheddar Bacon BBQ Burger",
      "Spinach, Cheddar, Mushroom & Blue Cheese Burger",
      "Milkshakes and refreshing drinks"
    ],

    goodToKnow: "Perfect for burger lovers, couples, friends and sunset seekers looking for a casual beachside meal in Morjim."
  },

  {
    id: 8,
    name: "Nova Sandwich Shop",
    cuisine: "Sandwiches • Café • Casual",
    rating: 4.8,
    reviews: 920,
    location: "Anjuna, Goa",
    hours: "12:00 PM - 11:00 PM",
    phone: "+918000000000",

    googleLink: "https://www.google.com/search?client=ms-android-samsung-rvo1&hs=6loV&sca_esv=51a2d2901f02fd24&hl=en-IN&cs=1&sxsrf=APpeQntAf-fggO1NVMVoMxwhF81VQ3sVyA%3A1787292812264&kgmid=%2Fg%2F11x34kv88s&q=The%20Nova%20Sandwich%20Shop&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=535141f723467819",

    instagram: "https://www.instagram.com/novasandwichshop/?hl=en",

    offer: "10% OFF",

    image: nova1,

    gallery: [
      nova1,
      nova2,
      nova3,
    ],

    description:
      "Nova Sandwich Shop in Anjuna is a cosy little food stop where overnight-fermented, wood-fired bread meets flavour-packed fillings, homemade sauces and a playful café atmosphere that feels like a hidden local find.",

    tags: [
      "Sandwiches",
      "Café",
      "Casual Dining",
      "Wood Fired Bread",
      "South Goa Favorite"
    ],

    bestTime: "12 PM–2 PM for lunch or 7 PM onwards for dinner. Going a little outside peak hours gives you a more relaxed experience in this cosy spot.",

    mustTry: [
      "Chicken 65 Sandwich",
      "Chicken & Pesto",
      "Tori Katsu",
      "The Greek",
      "Classic Pesto",
      "Pork Belly Bao",
      "Parmesan Fries + Garlic Aioli"
    ],

    goodToKnow: "Perfect for couples, foodies, casual dates and anyone looking for something beyond Goa’s usual café menu. Try the Peach, Lemon or Hibiscus Iced Tea with your sandwich."
  },

  {
    id: 7,
    name: "Babka Goa",
    cuisine: "Bakery • Café • Breakfast",
    rating: 4.7,
    reviews: 840,
    location: "Anjuna, Goa",
    hours: "9:00 AM - 11:00 PM",
    phone: "+918000000000",

    googleLink: "https://share.google/nq9AgUfiT1YGVh4J2",

    instagram: "https://www.instagram.com/babka.goa/?hl=en",

    offer: "10% OFF",

    image: babka2,

    gallery: [
      babka1,
      babka2,
      babka3,
      babka4,
    ],

    description:
      "Babka Goa in Anjuna is a slow, beautiful bakery-café for travellers who want an easy, European-style morning with freshly baked pastries, comforting coffee and a relaxed North Goa vibe.",

    tags: [
      "Bakery",
      "Coffee",
      "Breakfast",
      "European Vibes",
      "Slow Morning"
    ],

    bestTime: "9:00–11:00 AM is ideal if you want the freshest pastries and a quieter, more relaxed breakfast before exploring Anjuna, Vagator or Chapora.",

    mustTry: [
      "Chocolate Babka",
      "Cinnamon Roll",
      "Eclairs & Pastries",
      "Bagels & Sandwiches",
      "Fresh Coffee"
    ],

    goodToKnow: "Perfect for couples, coffee lovers, bakery fans and anyone looking for an aesthetic, slower morning away from Goa's usual beach-and-party rhythm."
  },

  {
    id: 9,
    name: "Coco Moga Bakehouse",
    cuisine: "Bakery • Coffee • Breakfast",
    rating: 4.7,
    reviews: 700,
    location: "Goa",
    hours: "9:00 AM - 4:00 PM",
    phone: "+919067186132",

    googleLink: "https://www.google.com/search?client=ms-android-samsung-rvo1&hs=J7Tq&sca_esv=f9672e346feee6d9&hl=en-IN&cs=1&sxsrf=APpeQnvjQvVJF9LlbTodPMjHdXqOQO1PDQ%3A1787294931696&kgmid=%2Fg%2F11p15rsnj3&q=Cocoa%20Moga%20Bakehouse%20Goa&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=bcab5ddc1965becc",

    instagram: "https://www.instagram.com/cocoamoga/?hl=en",

    offer: "10% OFF",

    image: coco1,

    gallery: [
      coco1,
      coco2,
      coco3,
    ],

    description:
      "A little bakery stop worth slowing down for, Coco Moga Bakehouse is for travellers who want the comforting side of Goa—freshly baked treats, coffee, and a relaxed bakery feel that makes you want to sit a little longer.",

    tags: [
      "Bakery",
      "Coffee",
      "Breakfast",
      "Fresh Bakes",
      "Slow Travel"
    ],

    bestTime: "Morning to early afternoon is ideal for the freshest selection of bakes and a relaxed breakfast or coffee stop before continuing your Goa plans.",

    mustTry: [
      "Freshly Baked Breads",
      "Pastries",
      "Cakes",
      "Bakery Specials",
      "Coffee"
    ],

    goodToKnow: "Perfect for slow travellers, breakfast lovers, café hoppers and anyone who enjoys discovering smaller local food spots instead of only sticking to Goa’s tourist cafés."
  },

  {
    id: 2,
    name: "Piccola Roma Pizza",
    cuisine: "Pizza • Italian",
    rating: 4.2,
    reviews: 2207,
    location: "Vagator, Goa",
    hours: "9:00 AM - 11:00 PM",
    phone: "+917507806821",

    googleLink:
      "https://www.google.com/search?q=picola+pizza+roma+place+in+vegator+goa&oq=picola+pizza+roma+place+in+vegator+goa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDcwMjNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",

    instagram:
      "https://www.instagram.com/popular/piccola-roma-vagator/",

    offer: "10% OFF",

    image: piccolo,

    gallery: [
      piccolo,
      piccolodish,
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
    ],

    description:
      "A popular pizza spot in Vagator serving fresh Roman-style slices, handmade pies, and casual Italian comfort food for a relaxed beach-town meal.",

    tags: [
      "Pizza",
      "Italian",
      "Casual Dining",
      "Vagator",
      "Family Friendly"
    ]
  },

  {
    id: 3,
    name: "Elephant Beach Cafe & Bar",
    cuisine: "Multicuisine • Café",
    rating: 4.4,
    reviews: 1265,
    location: "Vagator, Goa",
    hours: "9:00 AM - 11:00 PM",
    phone: "+919123456789",

    googleLink:
      "https://www.google.com/search?q=Elephant+Beach+Cafe+Bar+Goa",

    instagram:
      "https://www.instagram.com/elephantbeachcafe/",

    offer: "10% OFF",

    image:
      "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL0hxc0hmVW9DVG9DX1JSWnlNa2V5aFEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",

    gallery: [
      "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL0hxc0hmVW9DVG9DX1JSWnlNa2V5aFEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    ],

    description:
      "A vibrant beachside café and bar in Vagator known for sunset views, seafood platters, cocktails, live music and laid-back Goa vibes.",

    tags: [
      "Beachside",
      "Seafood",
      "Cocktails",
      "Live Music",
      "Sunset View"
    ]
  },



  {
    id: 4,
    name: "Thalassa",
    cuisine: "Greek • Mediterranean",
    rating: 4.6,
    reviews: 3920,
    location: "Siolim, Goa",
    hours: "9:00 AM - 1:00 AM",
    phone: "+919850033537",

    googleLink:
      "https://www.google.com/search?q=thalassa+restaurant+goa",

    instagram:
      "https://www.instagram.com/thalassagreektaverna/",

    offer: "10% OFF",

    image:
      "https://www.acroncandolimresortgoa.com/explore-goa/local-cuisine-in-goa/thalassa-goa/images/thalassa-goa.jpg",

    gallery: [
      "https://www.acroncandolimresortgoa.com/explore-goa/local-cuisine-in-goa/thalassa-goa/images/thalassa-goa.jpg",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    ],

    description:
      "One of Goa’s most iconic cliffside restaurants offering Greek and Mediterranean cuisine, legendary sunsets, live performances and luxury dining.",

    tags: [
      "Greek",
      "Mediterranean",
      "Sunset Dining",
      "Luxury",
      "Live Entertainment"
    ]
  },

  {
    id: 5,
    name: "Sakana Japanese Restaurant",
    cuisine: "Japanese • Sushi",
    rating: 4.4,
    reviews: 1020,
    location: "Anjuna, Goa",
    hours: "12:30 PM - 10:30 PM",
    phone: "+919890135502",

    googleLink:
      "https://share.google/DHAnI0fiHaMOYNhdM",

    instagram:
      "https://www.instagram.com/sakana_goa/",

    offer: "10% OFF",

    image: sakana1,
    
    gallery: [
      sakana1,
      sakana2,
      sakana3,
      sakana4,
    ],

    description:
      "A cosy Japanese restaurant in Anjuna serving authentic sushi, ramen, gyoza, teriyaki dishes and comforting soups in a relaxed setting ideal for couples, families and food lovers.",

    tags: [
      "Japanese",
      "Sushi",
      "Ramen",
      "Authentic Flavors",
      "Family Friendly"
    ],

    bestTime: "Weekday afternoons from 12:30 PM to 3:00 PM are quieter and more relaxed; evenings are livelier, especially on weekends.",

    mustTry: [
      "Sushi Rolls",
      "Chicken or Pork Ramen",
      "Gyoza",
      "Teriyaki Dishes",
      "Miso Soup"
    ],

    goodToKnow: "Perfect for couples, families and food lovers, with fresh, authentic Japanese flavors in a peaceful North Goa setting."
  }

]
