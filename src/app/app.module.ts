import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CharacterCardComponent } from './components/card/character-card/character-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { LocationCardComponent } from './components/card/location-card/location-card.component';
import { EpisodeCardComponent } from './components/card/episode-card/episode-card.component';
import { ComparativeTableComponent } from './components/comparative-table/comparative-table.component';
import { CreateComponent } from './components/create/create.component';

// material
import { MaterialModule } from './material-module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'compare', component: ComparativeTableComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    CharacterCardComponent,
    SearchComponent,
    LocationCardComponent,
    EpisodeCardComponent,
    ComparativeTableComponent,
    CreateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
