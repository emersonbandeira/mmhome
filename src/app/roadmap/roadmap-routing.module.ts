import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'roadmap', redirectTo: 'roadmap/index', pathMatch: 'full'},
  { path: 'roadmap/index', component: IndexComponent },
  { path: 'roadmap/:roadmapId/view', component: ViewComponent },
  { path: 'roadmap/create', component: CreateComponent },
  { path: 'roadmap/:roadmapId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadmapRoutingModule { }
