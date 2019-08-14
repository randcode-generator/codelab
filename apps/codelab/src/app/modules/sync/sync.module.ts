import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncComponent } from './sync.component';
import { SlidesModule } from '@codelab/slides';
import { SyncPollModule } from '@codelab/utils/src/lib/sync/components/poll/sync-poll.module';
import { SyncButtonModule } from '@codelab/utils/src/lib/sync/sync-button/sync-button.module';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '@codelab/slides/src/lib/routing/slide-routes';
import { SyncDirectivesModule } from '@codelab/utils/src/lib/sync/directives/sync-directives.module';
import { ConfigureSyncModule } from '@codelab/utils/src/lib/sync/components/configure-sync/configure-sync.module';
import { LoginService } from '@codelab/firebase-login';

@NgModule({
  declarations: [SyncComponent],
  exports: [SyncComponent],
  imports: [
    CommonModule,
    SlidesModule,
    SyncPollModule,
    SyncButtonModule,
    SyncDirectivesModule,
    ConfigureSyncModule,
  ]
})
export class SyncModule {
}

@Component({
  selector: 'codelab-sync-admin-wrapper',
  template: '<codelab-sync-survey [admin]="true"></codelab-sync-survey>'
})
export class SyncAdminWrapper {
  constructor(readonly loginService: LoginService){

  }
}

const routes = RouterModule.forChild(SlidesRoutes.get(SyncAdminWrapper));


@NgModule({
  declarations: [SyncAdminWrapper],
  imports: [
    SyncModule,
    routes,
  ]
})
export class SyncAdminModule {
}
