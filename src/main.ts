import { RouterModule, provideRouter } from '@angular/router';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpBackend, HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from '@app/app.routes';
import { AppComponent } from '@app/app.component';

export function httpLoaderFactory(handler: HttpBackend): TranslateHttpLoader {
  const http = new HttpClient(handler);
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // provideRouter(routes),
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpBackend]
        },
        useDefaultLang: true,
        defaultLanguage: 'es',
      }),
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
      })
    ),
  ]
})
  .catch((err) => console.error(err));
