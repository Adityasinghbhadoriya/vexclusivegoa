import HeritageFortPage from "../Components/HeritageFortPage"
import chaporaFortImage from "../assets/Chapora2.webp"

const ChaporaFort = () => (
  <HeritageFortPage
    title="Chapora Fort"
    eyebrow="Chapora • North Goa Landmark"
    subtitle="Where Goa meets the sea"
    intro="Perched above the Chapora River, this iconic hilltop fort brings together Portuguese-era history, rugged cliffs and sweeping views across Vagator Beach and the Arabian Sea."
    image={chaporaFortImage}
    tags={["Hilltop Fort", "Sunset Views", "Coastal Heritage"]}
    snapshot={[
      { label: "Location", value: "Chapora, North Goa" },
      { label: "Best time", value: "4:00 PM – sunset" },
      { label: "Duration", value: "1–1.5 hours" },
      { label: "Best for", value: "Sunset, photography, history and scenic views" },
      { label: "Experience", value: "Hilltop exploration with panoramic coastal views" },
    ]}
    sections={[
      {
        title: "A glimpse into Goa’s history",
        text: "Chapora Fort was built by the Portuguese in 1617 on the site of an earlier fortification. Its elevated position overlooking the Chapora River made it an important strategic point, while its weathered laterite walls still reveal Goa’s layered past.",
      },
      {
        title: "What makes it special",
        text: "Chapora Fort is defined by its dramatic setting. Rugged cliffs, open skies and Arabian Sea views make it feel less like a conventional monument and more like a natural viewpoint steeped in history.",
      },
      {
        title: "Why visit",
        text: "Explore the old walls, gateways and cliffside viewpoints before finding a quiet place to take in the coastline. Every corner offers a memorable perspective for sightseeing and photography.",
      },
      {
        title: "Best time to visit",
        text: "Late afternoon, especially from 4:00 PM until sunset, is ideal. Golden light warms the laterite walls and the setting sun makes the coastline especially memorable.",
      },
      {
        title: "Who it is best for",
        text: "A strong choice for sunset and photography lovers, history and architecture enthusiasts, couples seeking a scenic outing, and travellers who enjoy coastal viewpoints and peaceful walks.",
      },
    ]}
    tip="Wear comfortable shoes because reaching and exploring the fort involves an uphill walk over uneven terrain. Carry water and allow around 1–1.5 hours."
    caution="Chapora Fort is largely an open-air site with limited shade. Plan for the weather, remain within safe areas and take care around the exposed cliffside viewpoints."
    closingTitle="Why Chapora Fort deserves your visit"
    closingText="Chapora Fort combines history, dramatic coastal scenery and unforgettable sunset moments. It is an easy way to experience a quieter, more scenic side of North Goa beyond its beaches and nightlife."
    googleLink="https://share.google/eXDsvi9YIecExpJcA"
  />
)

export default ChaporaFort
