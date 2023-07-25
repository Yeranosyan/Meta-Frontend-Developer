import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a cozy and casual eatery located in the heart of
          Chicago. The restaurant offers a menu of fresh, Mediterranean-inspired
          dishes that are both healthy and flavorful. The menu features a
          variety of options including salads, sandwiches, and small plates that
          are perfect for sharing. The restaurant also offers a selection of
          beer, wine, and signature cocktails to complement the food. The
          atmosphere is casual and inviting, making it a great spot for a casual
          lunch or dinner with friends. With its delicious food, comfortable
          atmosphere, and friendly staff, Little Lemon is a must-visit for
          anyone looking for a great Mediterranean dining experience in Chicago.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
