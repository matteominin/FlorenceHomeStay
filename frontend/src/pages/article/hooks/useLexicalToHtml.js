import { useState, useEffect } from 'react';
import { getRestPopulateFn } from '@payloadcms/richtext-lexical/client';
import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async';

const API_URL = import.meta.env.VITE_API_URL;

const useLexicalToHtml = (lexicalContent) => {
    const [htmlContent, setHtmlContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const convertContent = async () => {
            if (!lexicalContent) {
                setHtmlContent(null);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                let html = await convertLexicalToHTMLAsync({
                    data: lexicalContent,
                    populate: getRestPopulateFn({
                        apiURL: `${API_URL}/api`
                    }),
                });

                // Fix image URLs that start with /api
                html = html.replace(
                    /src="(\/api\/[^"]+)"/g,
                    `src="${API_URL}$1"`
                );
                setHtmlContent(html);
            } catch (err) {
                console.error('Error converting content to HTML:', err);
                setError('Failed to display article content.');
                setHtmlContent(null);
            } finally {
                setLoading(false);
            }
        };

        convertContent();
    }, [lexicalContent]);

    return { htmlContent, loading, error };
};

export default useLexicalToHtml;