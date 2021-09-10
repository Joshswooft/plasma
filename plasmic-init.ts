import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

require('dotenv').config()

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID ?? "",
      token: process.env.PLASMIC_API_KEY ?? ""
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: process.env.NODE_ENV == "development",
})