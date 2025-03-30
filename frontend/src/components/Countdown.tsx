'use client'
import React, { useState, useEffect } from 'react';
import { getLocalizedElement, languageState } from '@/app/locale';
import './Countdown.css';

interface CountdownProps {
  date: Date;
}

const Countdown: React.FC<CountdownProps> = ({ date }) => {

  const [timeRemaining, setTimeRemaining] = useState<number>(date.getTime() - new Date().getTime());
  const [isClient, setIsClient] = useState(false)
  const [language, _] = languageState.useState();

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setTimeRemaining(date.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

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