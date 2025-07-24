import { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
    slug: "events",
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
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },
        {
            name: "date",
            type: "date",
            required: true,
            admin: {
                date: {
                    displayFormat: 'dd-MM-yyyy',
                },
            },
        },
        {
            name: 'time',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'timeOnly',
                    displayFormat: 'h:mm',
                },
            },
        },
        {
            name: "location",
            type: "text",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "link",
            type: "text",
        }
    ]
};