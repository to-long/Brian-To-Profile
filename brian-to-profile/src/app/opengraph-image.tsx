import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt =
  "Brian To — Principal Fullstack Engineer · Technical Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const avatarData = await readFile(
    join(process.cwd(), "public", "avatar.png"),
  );
  const avatarBase64 = `data:image/png;base64,${avatarData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingRight: "60px",
          }}
        >
          {/* Caption */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#0066ff",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            PRINCIPAL FULLSTACK ENGINEER · TECHNICAL LEADER
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Brian To
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "#666666",
              lineHeight: 1.5,
              maxWidth: "640px",
            }}
          >
            15 years building high-scale products, leading cross-border teams,
            and turning complex systems into clean, performant experiences.
          </div>
        </div>

        {/* Avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={avatarBase64}
            width={220}
            height={220}
            style={{
              borderRadius: "50%",
              border: "4px solid #e5e7eb",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          />
        </div>

        {/* Bottom bar — companies */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
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
            bottom: "50px",
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
