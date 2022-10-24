import { Package } from '@idg/idg';
import components from './components';
import apis from './apis';
import locales from './locales';
import store from './store';
import controllers from './controllers';

const pkg: Package = {
  name: 'menu',
  components,
  locales,
  store,
  apis,
  controllers,
};

export default pkg;
