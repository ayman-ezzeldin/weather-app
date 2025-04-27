import { getTranslations } from "next-intl/server";

export default async function page () {
  const t = await getTranslations('HomePage');

  return (
    <div>{t('about')}</div>
  )
}
