import React, { useState } from 'react';
import axios from 'axios';
import "./FirstAid.css";

const FirstAid = ({ changeRoute }) => {
  const [query, setQuery] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle the API request to ChatGPT
  const getFirstAidAdvice = async ({changeRoute}) => {
    if (!query) {
      setAdvice("Please enter a medical issue to get advice.");
      return;
    }

    setLoading(true);  // Start loading
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
            'Authorization': `Bearer YOUR_API_KEY`,  // Replace with your actual API key
            'Content-Type': 'application/json',
          }
        }
      );

      // Set the response from the API as advice
      setAdvice(response.data.choices[0].message.content);
    } catch (error) {
      setAdvice("Sorry, there was an error fetching the advice. Please try again.");
    } finally {
      setLoading(false);  // Stop loading
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

      <button onClick={() => changeRoute("")}>Back to Home</button>
    </div>
  );
};

export default FirstAid;