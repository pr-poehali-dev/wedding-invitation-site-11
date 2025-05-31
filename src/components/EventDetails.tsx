import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const EventDetails = () => {
  const details = [
    {
      icon: "Clock",
      title: "Время",
      value: "16:00",
      subtitle: "Регистрация в 15:30",
    },
    {
      icon: "MapPin",
      title: "Место",
      value: 'Усадьба "Романтика"',
      subtitle: "ул. Садовая, 25, Москва",
    },
    {
      icon: "Shirt",
      title: "Дресс-код",
      value: "Классический",
      subtitle: "Пастельные тона приветствуются",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Детали торжества
          </h2>
          <div className="w-24 h-0.5 bg-rose-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={detail.icon}
                    size={24}
                    className="text-rose-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {detail.title}
                </h3>
                <p className="text-2xl text-rose-600 font-light mb-2">
                  {detail.value}
                </p>
                <p className="text-gray-600 text-sm">{detail.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
