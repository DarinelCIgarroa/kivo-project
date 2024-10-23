import { boot } from 'quasar/wrappers';
import GoogleMap from '@/componentesGlobais/GoogleMap.vue';

export default boot(({ app }) => {
  app.component('GoogleMap', GoogleMap);
});
