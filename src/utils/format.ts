/**
 * Centralized formatting utility for PKR currency display throughout the application.
 */
export const formatPKR = (amount: number): string => {
  return `Rs. ${Math.round(amount).toLocaleString('en-PK')}`;
};

export const FREE_SHIPPING_THRESHOLD_PKR = 15000;
