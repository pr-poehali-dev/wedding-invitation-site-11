const PhotoGallery = () => {
  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Наша история
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=400&fit=crop`}
                alt={`Фото ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
