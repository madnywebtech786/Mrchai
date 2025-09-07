export default function CategoriesSection ()  {
  const categories = [
    { id: 1, name: 'Tea', icon: '🍵', description: 'Traditional Indian teas' },
    { id: 2, name: 'Coffee', icon: '☕', description: 'Rich aromatic coffees' },
    { id: 3, name: 'Samosa', icon: '🥟', description: 'Crispy triangular delights' },
    { id: 4, name: 'Snacks', icon: '🍪', description: 'Desi treats & sides' },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Our <span className="text-[#e5ab61]">Categories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-black">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};