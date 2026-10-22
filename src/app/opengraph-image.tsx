import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: UK digital marketing agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a0f1e 0%, #1b2338 60%, #2537c4 140%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #4a66fb, #7c3aed)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 800 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 950 }}>
            Digital marketing for UK businesses ready to grow
          </div>
          <div style={{ fontSize: 30, color: "#a3b0cc", marginTop: 28 }}>
            SEO · Local SEO · Social Media · Google Ads · Content · Packages from £10 to £150
          </div>
        </div>
      </div>
    ),
    size,
  );
}
