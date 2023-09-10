import { useState, useEffect } from 'react';

export function useAlert({ message, duration }) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      // Show the message
      setVisible(true);

      // Establish a timer to clean the message
      setTimeout(() => {
        setVisible(false);
      }, duration);
    }
  }, [message, duration]);

  return isVisible;
}
