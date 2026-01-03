import { getT } from '@/i18n/getT';
import SchoolDetailView from '@/components/schools/SchoolDetailView';
import { notFound } from 'next/navigation';

export default async function SchoolDetailPage({
  params,
}: {
  params: Promise<{ lang?: string; id: string }>;
}) {
  const { lang, id } = await params;
  const { t } = getT(lang);

  const allSchools = [
    ...t.schoolsList.japan,
    ...t.schoolsList.western,
    ...t.schoolsList.hongkong,
  ];

  const school = allSchools.find((s) => s.id === id);

  if (!school) {
    notFound();
  }

  return <SchoolDetailView data={school} />;
}
