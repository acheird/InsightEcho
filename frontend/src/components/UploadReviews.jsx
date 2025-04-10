import { useState } from "react";
import { uploadCSV } from "../api";

const UploadReviews = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await uploadCSV(formData);
      setUploadStatus(`✅ Uploaded ${response.insertedCount} reviews.`);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("Upload failed. Try again.");
    }
  };

  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Upload Reviews CSV</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>

      {uploadStatus && (
        <div className="mt-4 text-sm text-gray-700">{uploadStatus}</div>
      )}
    </div>
  );
};

export default UploadReviews;
