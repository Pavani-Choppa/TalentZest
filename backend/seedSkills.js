const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Skill = require("./models/Skill");
const Testimonial = require("./models/Testimonial");
dotenv.config();



const testimonials = [
  {
    message: "I learned piano in exchange for teaching cooking. What an amazing experience!",
    name: "Jessica Thompson",
    role: "Community Member",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    message: "The community here is incredible. I've made lifelong friends while learning new skills.",
    name: "Ahmed Hassan",
    role: "Community Member",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    message: "Skill Swap Hub changed my career path. I discovered my passion for UX design here!",
    name: "Maria Santos",
    role: "Community Member",
    image: "https://randomuser.me/api/portraits/women/46.jpg"
  }
];

const skills = [
  {
    category: "Technology",
    title: "Web Development",
    author: "Sarah Chen",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1581090700227-4c4e1f9c6a38"
  },
  {
    category: "Creative",
    title: "Graphic Design",
    author: "Marcus Rodriguez",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },
  {
    category: "Education",
    title: "Language Teaching",
    author: "Elena Kovač",
    rating: 5,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    category: "Creative",
    title: "Photography",
    author: "David Park",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✅ MongoDB Connected...");

    await Skill.deleteMany();
    await Testimonial.deleteMany();

    // Insert new data
    await Skill.insertMany(skills);
    await Testimonial.insertMany(testimonials);

    console.log("🌱 Skills Seeded Successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding DB:", err);
    mongoose.connection.close();
  }
};

seedDB();
