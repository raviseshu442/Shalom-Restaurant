import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Menu} from './menu/menu';
export const routes: Routes = [
    
  { path: '', component: Home },
  { path: 'menu', component: Menu },
];
