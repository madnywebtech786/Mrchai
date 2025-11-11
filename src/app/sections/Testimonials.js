export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Regular Customer",
      content:
        "The best chai in town! Mr. Chai has become my daily ritual. The masala chai is perfectly spiced and the samosas are always fresh.",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Coffee Enthusiast",
      content:
        "As a coffee lover, I was skeptical about Indian filter coffee. Mr. Chai proved me wrong with their authentic preparation and rich flavor.",
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Student",
      content:
        "Perfect spot for studying. The ambiance is cozy, the chai is amazing, and the student discount makes it affordable for us.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Customer <span className="text-[#e5ab61]">Stories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-[#e5ab61] mb-4">❝</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
