import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import dotenv from 'dotenv'
// import { Users } from './collections/Users'
// import { Products } from './collections/Products/Products'
// import { Media } from './collections/Media'
// import { ProductFiles } from './collections/ProductFile'
// import { Orders } from './collections/Orders'

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
    // collections: [Users, Products, Media, ProductFiles, Orders],
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/sell',
    },
    admin: {
        // user: 'users',
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- DigioCom',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})