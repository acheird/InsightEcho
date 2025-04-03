import { useEffect, useState } from "react";
import { fetchAnalysis } from "../api";

const Analysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: analysisData } = await fetchAnalysis();
        setData(analysisData);
      } catch (error) {
        console.error("Failed to fetch analysis", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading analysis...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-6 w-1/2">
      <h2 className="text-lg font-bold mb-4">Sentiment Analysis Results</h2>
      <p>Total Reviews: {data.totalReviews}</p>
      <p>Average Sentiment: {data.averageSentiment.toFixed(2)}</p>
      <h3 className="font-semibold mt-4">Top Positive Words:</h3>
      <ul className="list-disc pl-4">
        {data.topPositiveWords.map((word, index) => (
          <li key={index}>
            {word.word} (Score: {word.score.toFixed(2)})
          </li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4">Top Negative Words:</h3>
      <ul className="list-disc pl-4">
        {data.topNegativeWords.map((word, index) => (
          <li key={index}>
            {word.word} (Score: {word.score.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analysis;
