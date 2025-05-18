'use client'
import React, { useState, useEffect, useMemo } from 'react';
import { getLocalizedElement, languageState } from '@/app/locale';
import './Countdown.css';

const Countdown: React.FC = () => {
  const targetDate = useMemo(() => new Date('2025-05-18T11:10-06:00'), [])

  const [timeRemaining, setTimeRemaining] = useState<number>(targetDate.getTime() - new Date().getTime());
  const [isClient, setIsClient] = useState(false)
  const [language, _] = languageState.useState();

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
      <div className="countdown-timer">
        {isClient ? timerString : ''}
      </div>
      <div className="countdown-label">
        {getLocalizedElement("landing_countdown", language)}
      </div>
    </div>
  );
};

export default Countdown;