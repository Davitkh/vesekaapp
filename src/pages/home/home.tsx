import { useEffect } from 'react';
import { AppTitles } from '../../enums/app_titles';

export const Home = () => {
  useEffect(() => {
    document.title = AppTitles.Main;
  }, []);

  return (
    <div>
      <h1>Главная</h1>
    </div>
  );
};
