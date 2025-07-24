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
        },
        {
            name: "description",
            type: "text"
        }
    ]
};