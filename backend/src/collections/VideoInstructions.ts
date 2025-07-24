import { CollectionConfig } from "payload";

export const VideoInstructions: CollectionConfig = {
    slug: "video-instructions",
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "videoUrl",
            type: "text",
            required: true,
            admin: {
                description: "Copia il link dalla barra degli indirizzi del video YouTube, copia il codice (ad esempio: https://www.youtube.com/watch?v=nJMGJ_qj7Ns) Incolla la parte finale dopo ?v= qua: https://www.youtube.com/embed/(inserisci qua la parte finale)",
            }
        },
        {
            name: "description",
            type: "text"
        }
    ]
};