import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yasin Arafat // YASIN OS",
    short_name: "YASIN OS",
    description: "Personal operating system, brand identity portfolio, and experimental AI lab of Yasin Arafat.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFBF9",
    theme_color: "#0047FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
