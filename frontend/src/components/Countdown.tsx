'use client'
import React, { useState, useEffect } from 'react';
import { getLocalizedElement } from '@/app/locale';
import './Countdown.css';

const Countdown: React.FC = () => {
  const targetDate = new Date('2025-05-17T10:00-06:00'); // Modify this date as needed

  const [timeRemaining, setTimeRemaining] = useState<number>(targetDate.getTime() - new Date().getTime());
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setTimeRemaining(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const timerString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return (
    <div className="countdown-container">
      <div className="countdown-label">
        {getLocalizedElement("countdown")}
      </div>
      <div className="countdown-timer">
        {isClient ? timerString : ''}
      </div>
    </div>
  );
};

export default Countdown;