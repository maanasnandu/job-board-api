import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefreshComponent } from './refresh/refresh.component';

const routes: Routes = [
  {
    path: 'refresh',
    component: RefreshComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
