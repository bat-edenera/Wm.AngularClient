export class AppConsts {
    static remoteServiceBaseUrl: string;
    static appBaseUrl: string;

    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token'
    };

    static readonly originLocation = {
        dev: 'http://localhost:4300',
        main: 'http://main.ui.wonmore.com',
        b2b: 'http://b2b.ui.wonmore.com',
        hotel: 'http://hotel.ui.wonmore.com',
    }


    static readonly grid = {
        defaultPageSize: 10
    };
}
