import { useTranslation } from 'react-i18next'

export  function checkLange() {
  const { i18n} = useTranslation('default');
  const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
  return getCurrentLng()
}