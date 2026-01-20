import { motion } from "framer-motion";
import heroImage from "@/assets/hero-speaking.jpg";
import groupMeetingImage from "@/assets/group-meeting.jpg";
import tableTopicsImage from "@/assets/table-topics.jpg";
import evaluationImage from "@/assets/evaluation.jpg";
import leadershipImage from "@/assets/leadership.jpg";

const galleryImages = [
  {
    src: heroImage,
    alt: "Public speaking event",
    caption: "Public Speaking Excellence",
    span: "col-span-2 row-span-2",
  },
  {
    src: groupMeetingImage,
    alt: "Club group photo",
    caption: "Celebrating Together",
    span: "col-span-1 row-span-1",
  },
  {
    src: tableTopicsImage,
    alt: "Table Topics session",
    caption: "Impromptu Speaking",
    span: "col-span-1 row-span-1",
  },
  {
    src: evaluationImage,
    alt: "Evaluation session",
    caption: "Constructive Feedback",
    span: "col-span-1 row-span-1",
  },
  {
    src: leadershipImage,
    alt: "Leadership meeting",
    caption: "Leadership Development",
    span: "col-span-1 row-span-1",
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-gradient-section">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Moments That Define Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Glimpses of growth, celebration, and community from our meetings and events.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl shadow-card ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-semibold text-sm md:text-base">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about real images */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Follow us on social media for more photos from our meetings and events.
        </motion.p>
      </div>
    </section>
  );
};
