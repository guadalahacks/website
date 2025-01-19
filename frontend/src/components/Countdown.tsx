'use client'
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedString } from '@/app/locale';

const Countdown: React.FC = () => {
  const { language } = useLanguage();
  const targetDate = new Date('2024-05-19T10:00:00-06:00'); // Modify this date as needed

  const [timeRemaining, setTimeRemaining] = useState<number>(targetDate.getTime() - new Date().getTime());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeRemaining(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      <h1>{getLocalizedString("countdown_title", language)}</h1>
      <p>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
    </div>
  );
};

export default Countdown;