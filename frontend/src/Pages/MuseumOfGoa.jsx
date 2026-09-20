import HeritageFortPage from "../Components/HeritageFortPage"
import museumOfGoaImage from "../assets/Museum2.webp"

const MuseumOfGoa = () => (
  <HeritageFortPage
    title="Museum of Goa"
    eyebrow="Pilerne • Contemporary Art & Culture"
    subtitle="Where creativity brings Goa’s stories to life"
    intro="Located in Pilerne, the Museum of Goa is a contemporary art museum offering a different perspective on Goa’s history, culture and identity through paintings, sculptures and thought-provoking installations."
    overviewTitle="More than just an art museum"
    image={museumOfGoaImage}
    tags={["Contemporary Art", "Goan Culture", "Creative Stories"]}
    snapshot={[
      { label: "Location", value: "Pilerne, North Goa" },
      { label: "Established", value: "2015" },
      { label: "Famous for", value: "Contemporary art, sculptures and cultural stories" },
      { label: "Founded by", value: "Subodh Kerkar" },
      { label: "Vibe", value: "Creative, cultural and inspiring" },
    ]}
    sections={[
      {
        title: "More than just an art museum",
        text: "The Museum of Goa is not a traditional museum filled only with historical artefacts. It is a space where contemporary art becomes a way to understand Goa’s identity, traditions and changing culture.",
      },
      {
        title: "What makes it special",
        text: "Striking sculptures and immersive installations blend creativity with cultural expression. The artworks explore Goa’s history, people, traditions and modern identity, giving every gallery a different story to tell.",
      },
      {
        title: "Why visit",
        text: "Explore contemporary artworks, discover local stories, admire unique installations and enjoy a peaceful break from Goa’s busy tourist spots. It is a refreshing addition to an itinerary beyond beaches, forts and nightlife.",
      },
      {
        title: "Best time to visit",
        text: "The museum is enjoyable throughout the year, especially as an indoor escape from heat or rain. Late morning or afternoon works well, and allowing 1–2 hours gives you time to explore without rushing.",
      },
      {
        title: "Who it is best for",
        text: "A strong choice for art lovers, culture and history explorers, photography enthusiasts, families seeking a creative outing, and travellers wanting to experience Goa beyond its coastline.",
      },
    ]}
    tip="The museum is generally open Tuesday–Sunday, 10:00 AM–6:00 PM, and closed on Monday. Ticket prices vary, so verify current timings and rates before visiting. Read the artwork descriptions for helpful context."
    caution="Some contemporary exhibits are designed to make you think, question and interpret. Respect the artwork, follow gallery photography guidelines and check ahead for workshops or special exhibitions."
    closingTitle="Why the Museum of Goa deserves your visit"
    closingText="Come for the art, stay for the stories and leave with a fresh perspective on the culture and identity that make Goa unique. The museum shows that Goa’s story lives not only in its forts and coastline, but also in its creativity, people and changing traditions."
    googleLink="https://share.google/Zi3Wt1TBunpGdz6Pp"
  />
)

export default MuseumOfGoa
