import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-pulse delay-1000"></div>

      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h2 className="text-2xl text-rose-600 mb-4 font-light tracking-wider">
            Приглашаем на свадьбу
          </h2>
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-6 leading-tight">
            Анна <span className="text-rose-500">&</span> Михаил
          </h1>
          <div className="w-32 h-0.5 bg-rose-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8">15 июня 2024</p>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-700 max-w-md mx-auto leading-relaxed">
            Мы будем счастливы разделить с вами самый важный день в нашей жизни
          </p>
          <Button
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Подтвердить участие
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
