import { useState } from "react";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP submitted:", { name, attendance });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Подтвердите участие
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Буду присутствовать
            </label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            >
              <option value="">Выберите...</option>
              <option value="yes">Да, буду</option>
              <option value="no">К сожалению, не смогу</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-semibold"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
