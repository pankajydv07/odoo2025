import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

/**
 * Custom hook to use toast notifications
 * Provides access to toast methods
 * @returns {object} Toast methods
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context;
};

export default useToast;
