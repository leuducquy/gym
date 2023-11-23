
import { Trans, useTranslation } from 'react-i18next'

export default function TranText(text : any) {
  const { t } = useTranslation('default');

  return <Trans t={t}>{text}</Trans>;
}
