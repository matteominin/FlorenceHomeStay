import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload';

export const Articles: CollectionConfig = {
    slug: 'articles',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            required: true
        },
        {
            name: 'publishedDate',
            type: 'date',
            defaultValue: () => new Date(),
            required: true,
        },
        {
            name: 'readingTime',
            label: 'Estimated Reading Time (minutes)',
            type: 'number',
            required: true,
            min: 1
        },
        {
            name: 'summary',
            type: 'textarea',
            required: true,
            maxLength: 150,
            admin: {
                description: 'A brief summary of the article, displayed in listings.',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Upload the introductory image for the article.',
            },
        },
        {
            name: 'content',
            type: 'richText',
            required: true
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
            admin: {
                allowCreate: true
            },
        },
    ]
}
