import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Backend URL

// Fetch Sentiment Analysis Data
export const fetchAnalysis = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analysis`);
    return response.data; // Extracts JSON directly
  } catch (error) {
    console.error("Error fetching analysis:", error.response?.data || error);
    return null;
  }
};

// Submit a New Review
export const submitReview = async (review) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reviews`, review);
    return response.data; // Extracts JSON directly
  } catch (error) {
    console.error("Error submitting review:", error.response?.data || error);
    throw error;
  }
};
