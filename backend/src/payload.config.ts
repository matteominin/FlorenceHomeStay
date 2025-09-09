// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Articles } from './collections/Articles'
import { Media } from './collections/Media'
import { Tags } from './collections/Tags'
import { Events } from './collections/Events'
import { VideoInstructions } from './collections/VideoInstructions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Articles,
    Media,
    Tags,
    Events,
    VideoInstructions,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter(f => !['inlineCode'].includes(f.key)),
      FixedToolbarFeature()
    ]
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    //payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  cors: [
    'http://localhost:5173',
    'https://florencehomestay.web.app'
  ].filter(Boolean)
})
