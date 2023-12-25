import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Task 1: Add your import solution here
import { HomepageComponent } from './page-essentials/homepage/homepage.component';
import { SetupComponent } from './game/setup/setup.component';


const routes: Routes = [ 
// Task 1: Add your solution here
{path: "/", component: HomepageComponent},
{path: "/play", component: SetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
