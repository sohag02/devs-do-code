import { type Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  out: 'migrations',
} satisfies Config;
