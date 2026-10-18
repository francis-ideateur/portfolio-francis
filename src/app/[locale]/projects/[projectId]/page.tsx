import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import {
  getProjectDetails,
  getPublishedProjects,
  isLocale,
} from "@/content/portfolio";
import { getProjectMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string; projectId: string }> };

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) return [];
  return getPublishedProjects(params.locale)
    .filter((project) => project.details)
    .map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, projectId } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProjectDetails(locale, projectId);
  if (!project) notFound();
  return getProjectMetadata(locale, project);
}

export default async function ProjectPage({ params }: Props) {
  const { locale, projectId } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProjectDetails(locale, projectId);
  if (!project) notFound();
  return <ProjectDetail locale={locale} project={project} />;
}
