const servicesData = [
  {
    title: "Consultation",
    description:
      "We provide personalized consultations to understand your needs and recommend the best treatments for you.",
    image: "https://i.pinimg.com/236x/72/6e/fa/726efaefad3595ff92d3756ac7fd8cc2.jpg",
  },
  {
    title: "Therapy Sessions",
    description:
      "Our therapy sessions are designed to promote healing and well-being in a comfortable environment.",
    image: "https://i.pinimg.com/736x/3b/d5/f2/3bd5f25632d5476cc9cf1fca793f1049.jpg",
  },
  {
    title: "Health Monitoring",
    description:
      "We offer comprehensive health monitoring services to keep track of your health progress.",
    image: "https://i.pinimg.com/564x/5e/a6/21/5ea621de2522c3d61804ae12345f5697.jpg",
  },
  {
    title: "Wellness Programs",
    description:
      "Join our wellness programs tailored to enhance your overall health and lifestyle.",
    image: "https://i.pinimg.com/564x/a6/bd/8b/a6bd8b7bb8cc92d4f3501fe87df11e01.jpg",
  },
];

const Services = () => {
  return (
    <div className="services-page bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white rounded-lg shadow-lg p-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
