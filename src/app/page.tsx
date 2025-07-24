import Image from "next/image";
import HeroSection from "./components/Hero";
import Card from "./components/Card";
import { LampDemo } from "./components/lamp";
import { FaRocket, FaBrain, FaShieldAlt, FaMagic } from "react-icons/fa";

const cardData = [
  {
    title: "Lightning Fast",
    description: "Experience blazing fast responses and real-time results.",
    icon: <FaRocket />,
  },
  {
    title: "Smarter Than Ever",
    description: "Cutting-edge AI that learns and adapts to your needs.",
    icon: <FaBrain />,
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and never shared. 100% privacy.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Magical Experience",
    description: "Intuitive, beautiful, and fun to use. AI, reimagined.",
    icon: <FaMagic />,
  },
];

const reviews = [
  {
    name: "Jane Doe",
    text: "Astrix AI blew my mind! It's so fast and accurate. Highly recommended!",
  },
  {
    name: "John Smith",
    text: "I use Astrix every day for work and it saves me hours. Love the design!",
  },
  {
    name: "Emily R.",
    text: "The best AI platform I've tried. Secure, smart, and super easy to use.",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection />

      <div className="flex flex-wrap justify-center gap-6 py-10">
        {cardData.map((card, idx) => (
          <Card key={idx} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
      <section className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-sky-400 mb-8">What Our Users Say</h2>
        <div className="flex flex-col gap-6">
        <LampDemo />
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-black/70 border border-sky-800 text-white/90 rounded-xl p-6 shadow-md">
              <p className="text-lg italic mb-2">"{review.text}"</p>
              <span className="text-sky-400 font-semibold">- {review.name}</span>
            </div>
          ))}
        </div>
      </section>
   
    </div>
  );
}
