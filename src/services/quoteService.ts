import { GoogleGenAI } from '@google/genai';

// Your API key from Google AI Studio
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the Gemini model
const genAI = new GoogleGenAI({ apiKey: API_KEY });

// Choose a model — typically gemini-pro
// const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

/**
 * Fetches a motivational quote using the Gemini API.
 */
export async function fetchQuote(): Promise<{ quote: string; author?: string }> {
    try {
        const prompt = 'Give me a random quote that is either:dark but playfully humorous about AI domination,or an uplifting and motivational quote,or simply any thought-provoking quote.Include the quote in quotation marks and the author afterward."';
        const result = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
        const response = await result.text;
        const text = (response ?? '').trim();

        // Attempt to split the quote from the author
        const match = text.match(/"([^"]+)"(?:\s*[-—–]\s*(.+))?/);

        if (match) {
            return {
                quote: match[1],
                author: match[2] || 'Unknown',
            };
        }

        return {
            quote: text,
            author: 'Unknown',
        };
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw new Error('Could not fetch quote');
    }
}
