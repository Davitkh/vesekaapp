import { useEffect } from 'react';
import { AppTitles } from '../../enums/app_titles';

export const Maps = () => {
  useEffect(() => {
    document.title = AppTitles.Maps;
  }, []);
  return (
    <div>
      <h1>Карты</h1>
    </div>
  );
};
