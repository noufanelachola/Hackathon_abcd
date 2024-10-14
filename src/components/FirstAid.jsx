import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./FirstAid.css";

const FirstAid = () => {
  const [query, setQuery] = useState("");  // User input (e.g., "snake bite")
  const [advice, setAdvice] = useState("");  // ChatGPT response
  const [loading, setLoading] = useState(false);  // Loading state

  const navigate = useNavigate();  

  const API_KEY = 'YOUR_API_KEY';  

  // Function to handle the API request
  const getFirstAidAdvice = async () => {
    if (!query) {
      setAdvice("Please enter a medical issue to get advice.");
      return;
    }

    setLoading(true);  // Start loading spinner

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `What is the first aid for ${query}?` }],
          max_tokens: 200
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,  // Directly using API key here
            'Content-Type': 'application/json',
          }
        }
      );

      // Set the response from the API as advice
      setAdvice(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Sorry, there was an error fetching the advice. Please try again.");
    } finally {
      setLoading(false);  // Stop loading spinner
    }
  };

  return (
    <div className='firstAid'>
      <h2>First Aid Assistant</h2>
      <p>Type in a medical issue to get first-aid advice:</p>

      <input 
        type="text"
        placeholder="e.g., snake bite, burn, cut"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getFirstAidAdvice} disabled={loading}>
        {loading ? "Fetching advice..." : "Get First Aid Advice"}
      </button>

      {advice && (
        <div className="advice-box">
          <h3>First Aid Advice:</h3>
          <pre>{advice}</pre>
        </div>
      )}

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default FirstAid;
