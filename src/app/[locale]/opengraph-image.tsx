import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { content, isLocale } from "../../content/portfolio";

export const alt = "MOUTIMA OKA Francis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = content[locale];
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        background: "#0B1426",
        color: "#F7F5F0",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 42, fontWeight: 700 }}>MOF.</span>
        <span style={{ color: "#C5A46D", fontSize: 21 }}>
          {copy.hero.eyebrow}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ color: "#C5A46D", fontSize: 24 }}>
          MOUTIMA OKA Francis
        </span>
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.12,
            maxWidth: 980,
          }}
        >
          {copy.hero.headline}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #26354A",
          paddingTop: 24,
          color: "#A8B3C5",
          fontSize: 25,
        }}
      >
        {copy.hero.motto}
      </div>
    </div>,
    size,
  );
}
