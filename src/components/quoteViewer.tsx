import React, { useEffect, useState } from 'react';
import QuoteCard from './quoteCard';
import { fetchQuote } from '../services/quoteService';

const QuoteViewer: React.FC = () => {
    const [quote, setQuote] = useState<{ quote: string; author?: string } | null>(null);

    useEffect(() => {
        fetchQuote().then(setQuote).catch(console.error);
    }, []);

    if (!quote) return <p>Loading...</p>;

    return <QuoteCard quote={quote.quote} author={quote.author} />;
};

export default QuoteViewer;
