/**
 * Utility functions for formatting
 * All files in app/utils/ are auto-imported
 */

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const truncate = (text: string, length: number): string => {
  if (text.length <= length) return text
  return `${text.slice(0, length)}...`
}