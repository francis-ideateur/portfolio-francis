import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProjectDetails, isLocale } from "@/content/portfolio";

export const alt = "Projet — MOUTIMA OKA Francis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectImage({
  params,
}: {
  params: Promise<{ locale: string; projectId: string }>;
}) {
  const { locale, projectId } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProjectDetails(locale, projectId);
  if (!project) notFound();
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 42, fontWeight: 700 }}>MOF.</span>
        <span style={{ fontSize: 22, color: "#A8B3C5" }}>
          MOUTIMA OKA Francis
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span style={{ fontSize: 24, color: "#C5A46D" }}>
          {project.details.category}
        </span>
        <span style={{ fontSize: 100, fontWeight: 700 }}>{project.title}</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #26354A",
          paddingTop: 24,
          fontSize: 25,
          color: "#C5A46D",
        }}
      >
        {project.stageLabel} — {project.details.statusNote}
      </div>
    </div>,
    size,
  );
}
