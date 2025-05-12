import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HillComponent } from 'src/hill/hill.component';
import { ForestComponent } from './forest/forest.component';
import { MainComponent } from './main/main.component';
import { SeaComponent } from './sea/sea.component'; 
import { FormComponent } from './form/form.component';
const routes: Routes = [
  { path: '', component: MainComponent }, // Default route
  { path: 'hill', component: HillComponent },
  { path: 'forest', component: ForestComponent },
  { path: 'sea', component: SeaComponent },
  {path:'main',component:MainComponent},
  {path:'form',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }