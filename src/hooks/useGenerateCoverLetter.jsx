// src/hooks/useGenerateCoverLetter.js
import { useState } from "react";
import { message } from "antd";

export default function useGenerateCoverLetter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateCoverLetter = async (prompt) => {
    setLoading(true);
    setError(null);
    message.loading({ content: "Generating...", key: "gen" });

    const model = import.meta.env.VITE_GEMINI_MODEL

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error('API error:', res.status, text);
        throw new Error(`Gemini API failed with status ${res.status}`);
      }

      const result = await res.json();
      const generated = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No content generated.";

      message.success({ content: 'Done!', key: 'gen' });
      return generated;
    } catch (err) {
      console.error(err);
      setError('Failed to generate.');
      message.error({ content: 'Failed to generate', key: 'gen' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { generateCoverLetter, loading, error };
}
