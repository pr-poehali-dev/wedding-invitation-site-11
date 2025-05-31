const EventDetails = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Детали мероприятия
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-pink-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Церемония
            </h3>
            <p className="text-gray-600">15:00</p>
            <p className="text-gray-600">Парк Сокольники</p>
          </div>
          <div className="text-center p-6 bg-pink-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Банкет</h3>
            <p className="text-gray-600">18:00</p>
            <p className="text-gray-600">Ресторан "Золотое кольцо"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
