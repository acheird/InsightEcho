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
    <div className="bg-white text-black shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Sentiment Analysis Results</h2>

      <p>
        <strong>Total Reviews:</strong> {data.totalReviews}
      </p>
      <p>
        <strong>Average Sentiment:</strong> {data.averageSentiment.toFixed(2)}
      </p>

      {data.sentimentByRating && (
        <div className="mt-4">
          <h3 className="font-semibold">Average Sentiment Score per Review</h3>
          <ul className="list-disc pl-6">
            {Object.entries(data.sentimentByRating).map(([rating, score]) => (
              <li key={rating}>
                Rating {rating}: {score.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3 className="font-semibold mt-6">Top Positive Words:</h3>
      <ul className="list-disc pl-6">
        {data.topPositiveWords.map((word, index) => (
          <li key={index}>
            {word.word} (Score: {word.score.toFixed(2)})
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-6">Top Negative Words:</h3>
      <ul className="list-disc pl-6">
        {data.topNegativeWords.map((word, index) => (
          <li key={index}>
            {word.word} (Score: {word.score.toFixed(2)})
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-6">Top Positive Phrases:</h3>
      <ul className="list-disc pl-6">
        {data.topPositivePhrases.map((phrase, index) => (
          <li key={index}>
            {phrase.phrase} (Score: {phrase.score.toFixed(2)})
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-6">Top Negative Phrases:</h3>
      <ul className="list-disc pl-6">
        {data.topNegativePhrases.map((phrase, index) => (
          <li key={index}>
            {phrase.phrase} (Score: {phrase.score.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analysis;
