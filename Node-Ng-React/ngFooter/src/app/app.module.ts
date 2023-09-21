import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []  // Empty the array
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const footerElement = createCustomElement(FooterComponent, { injector: this.injector });
    customElements.define('angular-footer', footerElement);
  }
}
