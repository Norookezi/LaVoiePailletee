import Cookies, { CookieSetOptions } from 'universal-cookie';

export interface CookieStatus {
    isPending: boolean;
    referer: boolean;
    analytics: boolean;
}

export class CookieService {
    __cookie = new Cookies();
    get cookieList(): {
            required: boolean;
            title: string;
            description: string;
            detail: string | string[];
        }[] {
        return [
            {
                title: 'Referer',
                description:
                    'Afin de vous rediriger vers la page de votre streamer préféré, nous avons ajouté un clef dans le lien partagé par le streamer qui nous permet de savoir d\'ou vous venez',
                detail: [],
                required: false,
            },
            {
                title: 'Analytics',
                description:
                    'Afin de pouvoir mesurer l\'impact de notre site, nous avons mit en place un outil d\'analyse anonyme qui nous permet de voir les information suivante',
                detail: [
                    'Zone géographique aproximative',
                    'Date et heure d\'acces a la page',
                    'Page visité sur le site',
                    'Statistiques Referer (si acceptée)',
                ],
                required: false,
            },
        ];
    }

    updateCookieState(data: { [key: string]: boolean }): {
        [key: string]: boolean;
    } {
        Object.entries(data).forEach(([key, value]) => {
            if (!Object.keys(this.cookieList).includes(key)) {
                console.error(`Unknown key: ${key}`);
                return;
            }
            this.__cookie.set(key, value);
        });
        this.__cookie.set('isCookiePending', false);

        return Object.assign(
            {},
            ...Object.keys(this.cookieList).map((cookie) => {
                return { [cookie]: this.__cookie.get(cookie) };
            })
        );
    }

    get isCookiePending(): boolean {
        return this.__cookie.get('isCookiePending');
    }

    get isRefererAllowed(): boolean {
        return this.__cookie.get('referer') ?? false;
    }
    get isAnalyticsAllowed(): boolean {
        return this.__cookie.get('analytics') ?? false;
    }

    invalidate() {
        Object.keys(this.getAll()).map((name)=>{
            this.set(name, false, {expires: new Date(0)});
        });
        this.set('isCookiePending', true);
    }

    get(key: string): string|number|boolean {
        return this.__cookie.get(key);
    }
    set(key: string, value: unknown, options?: CookieSetOptions ): string|number|boolean {
        this.__cookie.set(key, value, options);
        return this.get(key);
    }
    remove(key: string) {
        this.__cookie.remove(key);
    }

    getAll(): {[key: string]: string|number|boolean} {
        return this.__cookie.getAll();
    }
}