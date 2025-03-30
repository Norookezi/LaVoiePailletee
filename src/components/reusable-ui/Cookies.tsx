import { ChangeEvent, JSX, useState } from 'react';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faChevronDown,
    faCookieBite,
    faGear,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

class Cookie {
    cookies: {[key: string]: boolean} = {};
    updateCookie(event: ChangeEvent<HTMLInputElement>): void {
        const {checked, id} = event.target;
        this.cookies[id] = checked;

        switch (Object.values(this.cookies).filter(v=>v).length) {
        case 0:
            document.querySelector('#customValidationButton')?.setAttribute('aria-label', 'Refuser tout les cookies');
            break;
        
        case 2:
            document.querySelector('#customValidationButton')?.setAttribute('aria-label', 'Autoriser tout les cookies');
            break;
    
        default:
            document.querySelector('#customValidationButton')?.setAttribute('aria-label', `Valider mes choix: ${Object.entries(this.cookies).map(([key, value]) => {
                return `${key}: ${value?'autorisé':'refusé'}`;
            }).join(', ')}`);
            break;
        }
    }
    get cookiesState(): 'denied' | 'granted' | 'pending' | string {
        return cookies.get('cookies') ?? 'pending';
    }

    set cookiesState(state: 'denied' | 'granted' | 'pending' | string) {
        if (state === 'custom') {
            state = Object.entries(this.cookies).filter(([,v])=>v).map(([k,])=> k).join('/');
        }
        cookies.set('cookies', state===''?'denied':state);
    }

    get isCookiesPending(): boolean {
        return this.cookiesState === 'pending';
    }

    clearAll() {
        Object.keys(cookies.getAll()).forEach(cookie=>{
            cookies.remove(cookie);
        });
    }
}

function getColor(value: string) {
    switch (value) {
    case 'pending':
        return 'bg-white';
    case 'granted':
        return 'bg-mediumseagreen/70';
    case 'denied':
        return 'bg-red-400/70';
    default:
        return 'bg-white';
    }
};


const cookies = new Cookies();
const cookieHandler = new Cookie();

export default function CookiesMenu(): JSX.Element {
    const [, setCookieStatus] = useState<'denied' | 'granted' | 'pending' | string>(
        cookieHandler.cookiesState
    );
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const handleAccept = () => {
        cookieHandler.cookiesState = 'granted';
        setCookieStatus('granted');
    };

    const handleDeny = () => {
        cookieHandler.clearAll();
        cookieHandler.cookiesState = 'denied';
        setCookieStatus('denied');
    };

    const handleReset = () => {
        cookieHandler.clearAll();
        cookieHandler.cookiesState = 'pending';
        setCookieStatus('pending');
    };

    const handleOption = () => {
        setIsOptionSelected(!isOptionSelected);
    };

    const handleCustom = () => {
        cookieHandler.cookiesState = 'custom';
        setCookieStatus('custom');
    };

    return (
        (<div
            role="alert"
            className={`fixed bottom-0 right-0 m-5 w-auto z-[9999] ${cookieHandler.isCookiesPending ? 'max-sm:w-[90vw] max-sm:m-0 max-sm:right-1/2 max-sm:translate-x-1/2' : ''}  ${
                getColor(cookieHandler.cookiesState)
            } ${
                cookieHandler.isCookiesPending
                    ? 'rounded-lg shadow-gray-700'
                    : 'rounded-full shadow-black'
            } overflow-hidden shadow-lg`}
        >
            <FontAwesomeIcon
                onClick={handleReset}
                title={`Cookies: ${
                    cookieHandler.cookiesState === 'granted' ? 'accepté' : 'refusé'
                }`}
                icon={faCookieBite}
                className={`${cookieHandler.isCookiesPending ? 'hidden' : 'block'} p-2 text-2xl`}
            />
            <div className={`${cookieHandler.isCookiesPending ? 'block' : 'hidden'}`}>
                <div className='w-full py-2 text-xl text-center text-white bg-green-500 font-kony'>
                    <FontAwesomeIcon icon={faCookieBite} />
                    <span className='m-1'>Vous reprendrez bien un cookie ?</span>
                </div>
                <p
                    className={`p-3 break-words max-w-[90vw] w-96  ${
                        isOptionSelected ? 'hidden' : 'block'
                    }`}
                >
          Nous utilisons des cookies pour mesurer la fréquentation de notre
          site, dans le but d'améliorer l'impact de notre événement caritatif.
          Ces données anonymes nous aident à convaincre de futurs partenaires de
          nous soutenir.
                </p>
                <div className={`${!isOptionSelected ? 'hidden' : 'block'}`}>
                    <label
                        htmlFor='Referer'
                        className={'px-3 py-2 block'}
                        key={'CookieSelectorReferer'}
                    >
                        <div className='flex justify-between w-auto'>
                            <span id="RefererLabel">Referer</span>
                            <input type='checkbox' onChange={(event)=>cookieHandler.updateCookie(event)} name='Referer' id='Referer' />
                        </div>
                        <p className='px-3 max-w-96'>Afin de vous rediriger vers la page de votre streamer préféré, nous avons ajouté un clef dans le lien partagé par le streamer qui nous permet de savoir d'ou vous venez</p>
                    </label>
                    <label
                        htmlFor='Analytics'
                        className={'px-3 py-2 block'}
                        key='CookieSelectorAnalytics'
                    >
                        <div className='flex justify-between w-auto'>
                            <span id="AnalyticsLabel">Google analytics</span>
                            <input type='checkbox' onChange={(event)=>cookieHandler.updateCookie(event)} name='Analytics' id='Analytics' />
                        </div>
                        <div className='px-3 max-w-96'>Afin de pouvoir mesurer l'impact de notre site, nous avons mit en place un outil d'analyse anonyme qui nous permet de voir les information suivante
                            <label aria-label='Cliquez pour en savoir plus' htmlFor={'Analytics_detail'} className='p-2 group'>
                                <input type='checkbox' className='hidden' name='Analytics_detail' id='Analytics_detail' />
                                <span className='underline hover:font-bold text-nowrap'>Voir plus <FontAwesomeIcon icon={faChevronDown} className='mr-1 duration-100 -rotate-90 group-has-[:checked]:-rotate-0' /></span>
                                <div className='hidden group-has-[:checked]:block'>
                                    <ul className='pl-5 list-disc'>
                                        <li>Zone géographique aproximative</li>
                                        <li>Date et heure d'acces a la page</li>
                                        <li>Page visité sur le site</li>
                                        <li>Statistiques Referer (si acceptée)</li>
                                    </ul>
                                </div>
                            </label>
                        </div>
          
                    </label>
                    <div className='flex justify-center p-2'>
                        <span
                            onClick={handleCustom}
                            id="customValidationButton"
                            role="button"
                            className='flex-1 p-2 m-1 text-center text-black duration-300 rounded-lg shadow-sm cursor-pointer bg-mediumseagreen/50 hover:bg-mediumseagreen/70 hover:shadow-lg'
                            aria-label={'Refuser tout les cookies'}
                        >
                            <FontAwesomeIcon icon={faCheck} className='mr-1' />
                            <span>Valider</span>
                        </span>
                        <span
                            onClick={handleOption}
                            aria-label='Retour'
                            role="button"
                            className='flex-1 p-2 m-1 text-center text-black duration-300 border-2 rounded-lg cursor-pointer bg-gray-400/50 hover:bg-gray-400/70 hover:shadow-lg'
                        >
                            <FontAwesomeIcon icon={faGear} className='mr-1' />
                            <span>Retour</span>
                        </span>
                    </div>
                </div>
                {/* Buttons */}
                <div className={`flex justify-center p-2 ${isOptionSelected ? 'hidden' : 'block'}`}>
                    <span
                        onClick={handleAccept}
                        aria-label='Accepter tout les cookies'
                        role="button"
                        className='flex-1 p-2 m-1 text-center text-black duration-300 rounded-lg shadow-sm cursor-pointer bg-mediumseagreen/50 hover:bg-mediumseagreen/70 hover:shadow-lg'
                    >
                        <FontAwesomeIcon icon={faCheck} className='mr-1 max-sm:block max-sm:mx-auto' />
                        <span aria-hidden="true">Accepter</span>
                    </span>
                    <span
                        onClick={handleDeny}
                        aria-label='Refuser tout les cookies'
                        role="button"
                        className='flex-1 p-2 m-1 text-center text-black duration-300 rounded-lg shadow-sm cursor-pointer bg-red-400/50 hover:bg-red-400/70 hover:shadow-lg'
                    >
                        <FontAwesomeIcon icon={faXmark} className='mr-1 max-sm:block max-sm:mx-auto' />
                        <span aria-hidden="true">Refuser</span>
                    </span>
                    <span
                        onClick={handleOption}
                        aria-label='Choisir les cookies autorisé'
                        role="button"
                        className='flex-1 p-2 m-1 text-center text-black duration-300 border-2 rounded-lg cursor-pointer bg-gray-400/50 hover:bg-gray-400/70 hover:shadow-lg'
                    >
                        <FontAwesomeIcon icon={faGear} className='mr-1 max-sm:block max-sm:mx-auto' />
                        <span aria-hidden="true">Choisir</span>
                    </span>
                </div>
            </div>
        </div>)
    );
}
