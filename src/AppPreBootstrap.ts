import { AppConsts } from '@shared/AppConsts';

export class AppPreBootstrap {

    static run(callback: () => void): void {
        AppPreBootstrap.getApplicationConfig(() => {
            callback();
        });
    }


    private static getApplicationConfig(callback: () => void) {
        return $.ajax({
            url: '/assets/appconfig.json',
            method: 'GET',
        }).done(result => {
            AppConsts.appBaseUrl = result.appBaseUrl;
            AppConsts.remoteServiceBaseUrl = result.remoteServiceBaseUrl;
            callback();
        });
    }
}
