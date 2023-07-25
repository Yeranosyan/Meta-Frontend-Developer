import customer1 from "./assets/customer1.jpeg";
import customer2 from "./assets/customer2.jpeg";
import customer3 from "./assets/customer3.jpeg";
import customer4 from "./assets/customer4.jpeg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Daria Grande",
    image: customer1,
    rating: [1, 1, 1, 1, 0.5],
    says: `I was there second time and food was perfect taste, im never tey some test like this.`,
  },
  {
    fullName: "Melinda Frozeng",
    image: customer2,
    rating: [1, 1, 1, 1, 1],
    says: `Woooow great food there, dessert was perfect like my Mom  made in our home!`,
  },
  {
    fullName: "Sara Twin",
    image: customer3,
    rating: [1, 1, 1, 1, 0.5],
    says: `Nice day waw whit Little Lemon Restaurant we  was celebrate birthday, all was on top level .`,
  },
  {
    fullName: "Adrienne Andersen",
    image: customer4,
    rating: [1, 1, 1, 1],
    says: `Really good food they make in this place im come again and again. Thanks so much my Greek salad was boooobm.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
