import React from "react";
import { Link } from "react-router-dom";
import "./ZodiacDescription.css";

const ZodiacDescription = () => {
  const zodiacSigns = [
    {
      name: "Aries",
      description:
        "Aries is the first sign of the zodiac, and that's pretty much how those born under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going. Whether or not everything gets done is another question altogether, for an Aries prefers to initiate rather than to complete.",
      dates: "March 21 - April 19",
      element: "Fire",
    },
    {
      name: "Taurus",
      description:
        "The sign of Taurus is associated with practicality, security, and material possessions. They tend to be dependable, persistent, and grounded. Taureans are sensual and tactile, considering touch and taste the most important of all senses.",
      dates: "April 20 - May 20",
      element: "Earth",
    },
    {
      name: "Gemini",
      description:
        "Gemini is the third sign of the zodiac and is associated with youth and versatility. Geminis are intellectual, expressive, and quick-witted. They love to share their knowledge and experiences with others, and they thrive on social interaction.",
      dates: "May 21 - June 20",
      element: "Air",
    },
    {
      name: "Cancer",
      description:
        "Cancer is the fourth sign of the zodiac and is associated with family and domesticity. Cancerians are nurturing, protective, and empathetic. They are deeply intuitive and sentimental, often putting the needs of others before their own.",
      dates: "June 21 - July 22",
      element: "Water",
    },
    {
      name: "Leo",
      description:
        "Leo is the fifth sign of the zodiac and is associated with creativity, self-expression, and theatricality. Leos are natural leaders and love to be the center of attention. They are generous, warm-hearted, and fiercely loyal to their loved ones.",
      dates: "July 23 - August 22",
      element: "Fire",
    },
    {
      name: "Virgo",
      description:
        "Virgo is the sixth sign of the zodiac and is associated with service, practicality, and meticulous attention to detail. Virgos are analytical, methodical, and hardworking. They have a strong sense of duty and responsibility and are often perfectionists.",
      dates: "August 23 - September 22",
      element: "Earth",
    },
    {
      name: "Libra",
      description:
        "Libra is the seventh sign of the zodiac and is associated with partnership, balance, and harmony. Librans are diplomatic, charming, and sociable. They are natural peacemakers and are skilled at seeing all sides of a situation.",
      dates: "September 23 - October 22",
      element: "Air",
    },
    {
      name: "Scorpio",
      description:
        "Scorpio is the eighth sign of the zodiac and is associated with intensity, passion, and transformation. Scorpios are deep, emotional, and intuitive. They are often misunderstood but possess tremendous inner strength and resilience.",
      dates: "October 23 - November 21",
      element: "Water",
    },
    {
      name: "Sagittarius",
      description:
        "Sagittarius is the ninth sign of the zodiac and is associated with exploration, adventure, and philosophy. Sagittarians are optimistic, enthusiastic, and love to travel and learn about different cultures. They are known for their open-mindedness and love of freedom.",
      dates: "November 22 - December 21",
      element: "Fire",
    },
    {
      name: "Capricorn",
      description:
        "Capricorn is the tenth sign of the zodiac and is associated with hard work, ambition, and achievement. Capricorns are disciplined, responsible, and practical. They are driven to succeed and are willing to put in the effort required to reach their goals.",
      dates: "December 22 - January 19",
      element: "Earth",
    },
    {
      name: "Aquarius",
      description:
        "Aquarius is the eleventh sign of the zodiac and is associated with innovation, originality, and humanitarianism. Aquarians are independent, intellectual, and progressive. They are forward-thinking and often ahead of their time.",
      dates: "January 20 - February 18",
      element: "Air",
    },
    {
      name: "Pisces",
      description:
        "Pisces is the twelfth sign of the zodiac and is associated with compassion, empathy, and spirituality. Pisceans are intuitive, imaginative, and deeply emotional. They are often artistic and creative, with a rich inner life.",
      dates: "February 19 - March 20",
      element: "Water",
    },
  ];

  return (
    <div className="zodiac-container">
      <h1 className="zodiac-heading">Zodiac Signs Information</h1>
      <ul className="zodiac-list">
        {zodiacSigns.map((sign, index) => (
          <li key={index} className="zodiac-item">
            <h2 className="zodiac-name">{sign.name}</h2>
            <p>
              <strong>Dates:</strong> {sign.dates}
            </p>
            <p>
              <strong>Element:</strong> {sign.element}
            </p>
            <p className="zodiac-description">{sign.description}</p>
          </li>
        ))}
      </ul>
      <Link to="/" className="zodiac-link">
        Go back home
      </Link>
    </div>
  );
};

export default ZodiacDescription;
