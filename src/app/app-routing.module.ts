import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then(module => module.TutorialModule)
  },
  {
    path: '**',
    redirectTo: 'tutorial'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
