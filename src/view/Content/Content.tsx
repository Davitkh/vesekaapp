import clx from 'classnames';
import styles from './Content.module.css';
import { Route } from 'react-router-dom';
import { Maps } from '../../pages/maps/maps';
import { Home } from '../../pages/home/home';
import { Auth } from '../../pages/auth/auth';

export const Content = () => {
  return (
    <div className={clx(styles.content, 'content_area')}>
      <Route exact path={'/'} component={Home} />
      <Route path={'/maps'} component={Maps} />
      <Route path={'/auth'} component={Auth} />
    </div>
  );
};
