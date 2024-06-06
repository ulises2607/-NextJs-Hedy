import { useLocale } from "next-intl";

const Index = () => {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          {locale === "en"
            ? "Welcome to Boost your Interviews!"
            : "¡Bienvenido a Boost your Interviews!"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {locale === "en"
                ? "React Interview Questions"
                : "Preguntas de Entrevista de React"}
            </h2>
            <p className="text-gray-700">
              {locale === "en"
                ? "Enhance your interview preparation with our curated list of questions for React!"
                : "¡Mejora tu preparación para las entrevistas con nuestra lista seleccionada de preguntas para React!"}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {locale === "en"
                ? "Rails Interview Questions"
                : "Preguntas de Entrevista de Rails"}
            </h2>
            <p className="text-gray-700">
              {locale === "en"
                ? "Enhance your interview preparation with our curated list of questions for Rails!"
                : "¡Mejora tu preparación para las entrevistas con nuestra lista seleccionada de preguntas para Rails!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
