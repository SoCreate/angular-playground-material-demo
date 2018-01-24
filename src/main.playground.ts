import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground } from 'angular-playground';
import { MaterialPlaygroundModule } from './material-playground.module';

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(MaterialPlaygroundModule);
