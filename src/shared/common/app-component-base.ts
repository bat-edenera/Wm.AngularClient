import { Injector } from '@angular/core';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { UtileService } from './utils/util.service';
import { UiService } from './utils/ui.service';

export abstract class AppComponentBase {
    version = 'v1.0.0';
    app: AppSessionService;
    util: UtileService;
    ui: UiService;


    constructor(injector: Injector) {
        this.app = injector.get(AppSessionService);
        this.util = injector.get(UtileService);
        this.ui = injector.get(UiService);
    }

}
