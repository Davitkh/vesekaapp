import React, { useEffect } from 'react';
import { AppTitles } from '../../enums/app_titles';

export const Auth = () => {
  useEffect(() => {
    document.title = AppTitles.Login;
  }, []);

  return (
    <div>
      <h1>Auth</h1>
    </div>
  );
};
