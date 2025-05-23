import React from 'react';

interface QuoteCardProps {
    quote: string;
    author?: string;
    className?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, className }) => (
   <blockquote
    className={`bg-[#fdfcfa] dark:bg-[#1f1f1f] shadow-sm rounded-2xl px-6 py-5 max-w-xl mx-auto border-l-4 border-l-gradient-to-b from-indigo-500 to-purple-400 ${className || ''}`}
    style={{
        fontFamily: `'Inter', 'Georgia', serif`,
    }}
>
    <p className="text-xl font-medium italic text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
        “{quote}”
    </p>
    {author && (
        <footer className="text-right text-sm">
            <span className='black'> — {author} — </span>
        </footer>
    )}
</blockquote>


);

export default QuoteCard;