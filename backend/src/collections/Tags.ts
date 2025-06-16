import { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
    slug: "tags",
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: "tag",
    },
    fields: [
        {
            name: "tag",
            type: "text",
            required: true,
            unique: true,
        },
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "text",
            required: true,
            maxLength: 150
        }
    ]
};