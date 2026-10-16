import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonPlayer } from "@/features/learn/components/lesson-player";
import { getLesson, lessons } from "@/features/learn/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return {
    title: lesson ? `${lesson.title} — Learn & Earn — XPVest` : "Learn — XPVest",
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return <LessonPlayer lesson={lesson} />;
}
