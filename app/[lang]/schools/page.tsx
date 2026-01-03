import { getT } from '@/i18n/getT';
import SchoolsTabsView from '@/components/schools/SchoolsTabsView';

export default async function SchoolsPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { t, lang } = getT((await params).lang);

  return (
    <SchoolsTabsView
      title={t.schools.title}
      tabs={t.schools.tabs}
      list={t.schoolsList}
      lang={lang}
    />
  );
}
