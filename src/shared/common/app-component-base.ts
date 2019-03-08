import { Injector } from '@angular/core';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { UtileService } from './utils/util.service';

export abstract class AppComponentBase {
    version = 'v1.0.0';
    app: AppSessionService;
    util: UtileService;


    constructor(injector: Injector) {
        this.app = injector.get(AppSessionService);
        this.util = injector.get(UtileService);
    }

}
