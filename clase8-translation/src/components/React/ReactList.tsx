import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";

const ReactList = () => {
  const { t } = useTranslation("React");
  const questions = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          {t("title")}
        </h1>
        {questions.map((key) => (
          <div
            key={key}
            className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold text-blue-800">
              {t(`questions.${key}.question`)}
            </h2>
            <p className="mt-2 text-gray-700">{t(`questions.${key}.answer`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactList;
