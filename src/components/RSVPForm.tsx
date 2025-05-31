import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    dietary: "",
    attending: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP submitted:", formData);
    alert("Спасибо! Мы получили ваш ответ.");
  };

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Подтверждение участия
          </h2>
          <div className="w-24 h-0.5 bg-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Пожалуйста, подтвердите ваше участие до 1 июня
          </p>
        </div>

        <Card className="shadow-lg border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-light text-gray-800">
              RSVP
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Количество гостей
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                  >
                    <option value="1">1 гость</option>
                    <option value="2">2 гостя</option>
                    <option value="3">3 гостя</option>
                    <option value="4">4+ гостей</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Особенности питания
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                    value={formData.dietary}
                    onChange={(e) =>
                      setFormData({ ...formData, dietary: e.target.value })
                    }
                    placeholder="Вегетарианство, аллергии..."
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button
                  type="button"
                  variant={formData.attending ? "default" : "outline"}
                  onClick={() => setFormData({ ...formData, attending: true })}
                  className={
                    formData.attending
                      ? "bg-rose-500 hover:bg-rose-600"
                      : "border-rose-300 text-rose-600"
                  }
                >
                  Буду присутствовать
                </Button>
                <Button
                  type="button"
                  variant={!formData.attending ? "default" : "outline"}
                  onClick={() => setFormData({ ...formData, attending: false })}
                  className={
                    !formData.attending
                      ? "bg-gray-500 hover:bg-gray-600"
                      : "border-gray-300 text-gray-600"
                  }
                >
                  Не смогу прийти
                </Button>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Отправить ответ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVPForm;
