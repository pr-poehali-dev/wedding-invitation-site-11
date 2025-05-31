const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      alt: "Фото пары 1",
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400",
      alt: "Фото пары 2",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
      alt: "Фото пары 3",
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400",
      alt: "Фото пары 4",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Наша история
          </h2>
          <div className="w-24 h-0.5 bg-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждая фотография рассказывает часть нашей истории любви
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            "Любовь не в том, чтобы смотреть друг на друга, а в том, чтобы
            смотреть в одном направлении"
          </p>
          <p className="text-gray-500 mt-2">— Антуан де Сент-Экзюпери</p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
