import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJogosComponent } from './components/lista-jogos/lista-jogos.component';
import { AdicionarJogoComponent } from './components/adicionar-jogo/adicionar-jogo.component';

const routes: Routes = [ 
  { path: 'jogos', component: ListaJogosComponent }, 
  { path: 'adicionar-jogo', component: AdicionarJogoComponent }, 
  { path: '', redirectTo: '/jogos', pathMatch: 'full' } 
]; 

@NgModule({
  declarations: [
    AppComponent,
    ListaJogosComponent,
    AdicionarJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
