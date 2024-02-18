import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-light p-8 rounded-lg shadow-md">
      <h1 className="text-5xl text-black/60 font-semibold mb-4">About Our Fashion Brand</h1>
      <p className="text-gray-500 text-3xl text-center">
        Welcome to our stylish world! At{" "}
        <span className="text-rose-700">Dazzlers</span>, we believe that fashion
        is more than just clothing; it's an expression of individuality and
        confidence.
      </p>
      <p className="text-gray-500 text-3xl text-center mt-4">
        Our journey began when we noticed that a lot of people in our community do not have a good fashion sense and was unaware about the world trending. We thought that if we could make them aware of what will make them more confident in expressing themselves in the modern world as well as make them more confident in themselves it will be a great achievement.<br></br>
        Since then, we've been committed to curating the latest trends, timeless
        classics, and sustainable pieces for fashion enthusiasts like you.
      </p>
      <ul className="list-disc list-inside mt-4 text-purple-600 text-3xl text-center">
        <li>Quality craftsmanship</li>
        <li>Unique designs</li>
        <li>Eco-friendly materials</li>
        <li>Exceptional customer service</li>
      </ul>
      <p className="text-gray-500 text-3xl text-center mt-4">
        Whether you're dressing up for a special occasion or embracing everyday
        chic, we've got you covered. Explore our collections and find pieces
        that resonate with your style.
      </p>
      <p className="text-gray-500 text-3xl text-center mt-4">
        Thank you for being part of our fashion journey!
      </p>
    </div>
  );
};

export default About;
