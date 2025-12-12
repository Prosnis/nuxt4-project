/**
 * Example composable function
 * All files in app/composables/ are auto-imported
 */
export const useGreeting = () => {
  const { t } = useI18n()

  const getGreeting = (name: string) => {
    return `${t('welcome')}, ${name}!`
  }

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return t('greetings.morning')
    if (hour < 18) return t('greetings.afternoon')
    return t('greetings.evening')
  }

  return {
    getGreeting,
    getTimeBasedGreeting,
  }
}