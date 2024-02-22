const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop for professionals.",
      price: 1200,
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Flagship smartphone with advanced features.",
      price: 800,
    },
    {
      id: 3,
      name: "Camera",
      description: "Professional DSLR camera for stunning photos.",
      price: 1500,
    },
    {
      id: 4,
      name: "Headphones",
      description: "Wireless noise-canceling headphones for immersive audio.",
      price: 250,
    },
    {
      id: 5,
      name: "Gaming Console",
      description: "Powerful gaming console for a next-gen gaming experience.",
      price: 500,
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Smart fitness tracker to monitor health and activity.",
      price: 100,
    },
    {
      id: 7,
      name: "Coffee Maker",
      description: "High-end coffee maker for gourmet coffee at home.",
      price: 150,
    },
    {
      id: 8,
      name: "Smartwatch",
      description: "Feature-rich smartwatch with fitness and communication capabilities.",
      price: 300,
    },
    {
      id: 9,
      name: "Tablet",
      description: "Versatile tablet for work and entertainment on the go.",
      price: 400,
    },
    {
      id: 10,
      name: "4K TV",
      description: "Ultra-high-definition 4K TV for an immersive viewing experience.",
      price: 800,
    },
  ];

  return (
    <ul className="ul">
      {products.map((products) => (
        <div>
        <li class="list" key={products.id}>
            <h3>{products.name}</h3>
            <p>
              {products.description}
            </p>
            <p>${products.price}</p>
        </li>
        </div>
      ))}
    </ul>
  )
};

export default ProductList;
