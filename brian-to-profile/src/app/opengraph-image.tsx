import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Brian To — Principal Fullstack Engineer · Technical Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eef2ff 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Purple glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(147,51,234,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Caption */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "3px",
            color: "#0066ff",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          PRINCIPAL FULLSTACK ENGINEER · TECHNICAL LEADER
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Brian To
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#666666",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          15 years building high-scale products, leading cross-border teams, and
          turning complex systems into clean, performant experiences.
        </div>

        {/* Bottom bar — companies */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "100px",
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {["MONEY FORWARD", "CROSSIAN", "NITECO", "FPT"].map((company) => (
            <div
              key={company}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#999999",
              }}
            >
              {company}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "100px",
            fontSize: 16,
            fontWeight: 500,
            color: "#0066ff",
          }}
        >
          brian-to.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
