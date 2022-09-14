import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';

// import { Examples } from './collections/Examples';
import { Users } from './collections/users';

dotenv.config();

const serverURL = `${process.env.SERVER_HOST ?? 'http://localhost'}:${process.env.SERVER_PORT ?? 3080}`;

export default buildConfig({
  serverURL: serverURL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
