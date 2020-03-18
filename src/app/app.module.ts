import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtLoadingDistractorModule } from '@dynatrace/barista-components/loading-distractor';
import { DtButtonGroupModule } from '@dynatrace/barista-components/button-group';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';
import { AttributionComponent } from './attribution/attribution.component';
import { LoadingComponent } from './dashboard/loading/loading.component';
import { DtPaginationModule } from '@dynatrace/barista-components/pagination';
import { FallbackimgDirective } from './fallbackimg.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AttributionComponent,
    LoadingComponent,
    FallbackimgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
    DtButtonModule,
    DtFormFieldModule,
    DtInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DtButtonGroupModule,
    DtCardModule,
    DtInlineEditorModule,
    DtLoadingDistractorModule,
    DtPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
