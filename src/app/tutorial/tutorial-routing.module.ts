import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent,
    children: [
      {
        path: 'tutorials',
        component: TutorialsListComponent,
      },
      {
        path: 'tutorials/:id',
        component: TutorialDetailsComponent
      },
      {
        path: 'add',
        component: AddTutorialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
