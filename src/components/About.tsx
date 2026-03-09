import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
// import groupMeetingImage from "@/assets/group-meeting.jpg";
import groupMeetingImage from "@/assets/team-meeting-group.png";


const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for continuous improvement in every speech and every meeting.",
  },
  {
    icon: Heart,
    title: "Supportive",
    description: "A welcoming environment where everyone's growth is celebrated.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting connections with like-minded professionals.",
  },
  {
    icon: Award,
    title: "Achievement",
    description: "Recognizing milestones and celebrating success together.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={groupMeetingImage}
                alt="Founders Toastmasters Club meeting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-card"
            >
              <p className="font-bold text-2xl">Since</p>
              <p className="text-sm opacity-80">Established in Nepal</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nepal's Premier Speaking &amp; Leadership Community
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founders Toastmasters Club is a vibrant community of professionals, entrepreneurs, 
              and aspiring leaders in Kathmandu, Nepal. As part of District 41 and Toastmasters 
              International, we provide a proven framework to develop communication and 
              leadership skills.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you want to overcome the fear of public speaking, advance your career, 
              or simply connect with inspiring individuals, our club offers a supportive 
              environment where you can learn, practice, and grow at your own pace.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
