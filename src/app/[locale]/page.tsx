import {getTranslations} from 'next-intl/server';
import ModeToggle  from './_components/DarkToggle';
import Sidebar from './_components/Sidebar';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <Sidebar />
      <h1>{t('title')}</h1>;
      <ModeToggle />
    </div>
  );
}
