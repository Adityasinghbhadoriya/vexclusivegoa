import HeritageFortPage from "../Components/HeritageFortPage"
import reisMagosImage from "../assets/Reis2.webp"

const ReisMagosFort = () => (
  <HeritageFortPage
    title="Reis Magos Fort"
    eyebrow="Reis Magos • North Goa Heritage"
    subtitle="Where Goa’s history meets the river"
    intro="Overlooking the Mandovi River, Reis Magos Fort offers a quieter way to experience Goa’s Portuguese past through restored corridors, laterite walls, historic watchtowers and sweeping river views."
    image={reisMagosImage}
    tags={["Portuguese Heritage", "River Views", "Photography"]}
    snapshot={[
      { label: "Location", value: "Reis Magos, Bardez, North Goa" },
      { label: "Best time", value: "3:30 PM – 5:30 PM" },
      { label: "Duration", value: "1–2 hours" },
      { label: "Best for", value: "History, architecture and photography" },
      { label: "Experience", value: "Heritage exploration with scenic river views" },
    ]}
    sections={[
      {
        title: "A glimpse into Goa’s history",
        text: "Built in 1551 and later strengthened, Reis Magos Fort once played an important role in defending the Mandovi River and protecting Goa’s capital. Its strategic location and historic structure make it a fascinating stop for anyone curious about Goa’s Portuguese past.",
      },
      {
        title: "What makes it special",
        text: "Unlike Goa’s busier attractions, the fort offers a relaxed heritage experience. Its restored interiors, old stone walls and peaceful surroundings create a charming setting to explore at your own pace.",
      },
      {
        title: "Why visit",
        text: "Come for the history and stay for the quiet charm and beautiful views. Admire the architecture, capture photographs or simply pause to enjoy the river breeze away from the crowded beaches.",
      },
      {
        title: "Best time to visit",
        text: "Late afternoon, especially between 3:30 PM and 5:30 PM, brings softer light to the fort’s walls while the Mandovi River creates a beautiful backdrop for photographs.",
      },
      {
        title: "Who it is best for",
        text: "A rewarding stop for history and heritage enthusiasts, architecture and photography lovers, couples seeking a peaceful outing, and travellers who enjoy scenic, less-crowded places.",
      },
    ]}
    tip="Allow 1–2 hours to explore the restored corridors, fort walls, watchtowers and river-facing viewpoints. Wear comfortable footwear and carry water."
    caution="Reis Magos Fort is more than a viewpoint—it is a restored heritage site with stories woven into its walls. Take your time exploring rather than rushing through it."
    closingTitle="Why Reis Magos Fort deserves your visit"
    closingText="If you want to experience Goa beyond its beaches and nightlife, Reis Magos Fort brings together heritage, quiet exploration and riverfront charm for a relaxed North Goa afternoon."
    googleLink="https://share.google/ZARaQ6YhABfV7bU6p"
  />
)

export default ReisMagosFort
