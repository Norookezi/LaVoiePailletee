import { Location } from 'react-router-dom';
import { CookieService } from './cookie.service';
import ReactGA from 'react-ga4';

export class Analystic {
    private __cookieService: CookieService = new CookieService();

    get isInitNeeded(): boolean {
        return true; // this.__cookieService.get('_ga') === undefined;
    }
    
    initGA() {
        // if (this.__cookieService.get('Analytics') !== true) return;
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS!);
        this.info('Initialized');
    }
    
    pageView(location: Location) {
        if (this.__cookieService.get('Analytics') !== true) return;
        ReactGA.send({ hitType: 'pageview', page: location.pathname });
        this.info(`Event page_view sent, ${location.pathname}`);
    }

    info(message: string) {
        console.warn(`GA: ${message}`);
    }
}