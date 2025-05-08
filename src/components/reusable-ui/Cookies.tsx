import { JSX, useEffect, useState } from 'react';
import Button from './Button';
import {
    faCheck,
    faChevronDown,
    faCookieBite,
    faGear,
    faUndo,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CookieService } from '../../services/cookie.service';
import Switch from './Switch';
import { Analystic } from '../../services/analystic.service';
import { Link } from 'react-router-dom';

const cookieService: CookieService = new CookieService();
const analyticsService = new Analystic();

interface CookieState {
    isPending: boolean,
    mode: 'simple'|'complex',
    selectedCookies: {[key: string]: boolean}
}

export default function CookiesMenu(): JSX.Element {
    const [state, updateState] = useState<CookieState>({isPending: !!cookieService.isCookiePending, mode: 'simple', selectedCookies: !cookieService.isCookiePending?Object.assign({}, ...cookieService.cookieList.map(({title})=>{ return {[title]: cookieService.get(title)};})):{}});

    useEffect(()=>{
        if (state.isPending) return;
        if (state.selectedCookies['Analytics'] === true && analyticsService.isInitNeeded) analyticsService.initGA();
    }, [state]);

    const updateCookie = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateState({isPending: true, mode:'complex', selectedCookies: {...state.selectedCookies, ...{[event.currentTarget.id]: event.currentTarget.checked}}});
    };
    function setCookies(isCookiePending: boolean = false, cookies: {[key: string]: boolean} = {}) {
        const date = new Date();

        date.setDate(date.getDate() + 7);
        cookieService.set('isCookiePending', isCookiePending, {expires: date });
        Object.entries(cookies).forEach(([name, isAllowed]) => {
            cookieService.set(name, isAllowed, {expires: date });
        });
        updateState({isPending: false, mode: 'simple', selectedCookies: cookies});

    }
    
    if (cookieService.isCookiePending == undefined) {
        cookieService.set('isCookiePending', true);
    }

    return (
        <>
            {cookieService.isCookiePending ? (
                <div className="fixed z-50 overflow-hidden bg-white shadow-2xl bottom-5 max-sm:bottom-0 rounded-xl sm:max-w-96 sm:left-5 max-sm:w-screen max-sm:m-0 max-sm:right-1/2 max-sm:translate-x-1/2">
                    <p
                        data-title
                        className="p-3 text-xl text-center text-white bg-green-500 font-kony"
                    >
                        Vous reprendrez bien un cookie ?
                    </p>
                    {
                        /* Simple */
                        state.mode === 'simple' && (
                            <>
                                <div data-body-simple className="px-5 py-3">
                                    <p>
                                    Ce site utilise des cookies pour mesurer la
                                    fréquentation, dans le but d'améliorer l'impact
                                    de notre événement caritatif. Ces données
                                    anonymes nous aident à convaincre de futurs
                                    partenaires de nous soutenir.
                                    </p>
                                </div>
                                <div className="flex justify-center px-2 max-sm:flex-col">
                                    <Button
                                        label="Accepter"
                                        icon={faCheck}
                                        iconPosition="left"
                                        className="max-sm:flex justify-center !bg-mediumseagreen/50 hover:!bg-mediumseagreen/70 active:!bg-mediumseagreen"
                                        action={() => {
                                            setCookies(false, Object.assign({}, ...cookieService.cookieList.map(({title})=>{ return {[title]: true};})));
                                        }}
                                    ></Button>
                                    <Button
                                        label="Refuser"
                                        icon={faXmark}
                                        iconPosition="left"
                                        className="max-sm:flex justify-center !bg-red-400/50 hover:!bg-red-400/70 active:!bg-red-400"
                                        action={() => {
                                            setCookies(false, {});
                                        }}
                                    ></Button>
                                    <Button
                                        label="Choisir"
                                        icon={faGear}
                                        iconPosition="left"
                                        className="max-sm:flex justify-center !bg-slate-200 hover:!bg-slate-300/70 active:!bg-slate-300"
                                        action={() => {
                                            updateState({isPending: true, mode: 'complex', selectedCookies: {}});
                                        }}
                                    ></Button>
                                </div>
                                <Link className='block w-full pb-2 text-center text-blue-500 underline hover:text-blue-300' to={{pathname: '/cookies'}}>En savoir plus</Link>
                            </>
                        )}
                    {state.mode === 'complex' && (
                        <>
                            <ul data-body-complex className="w-screen max-w-full px-5 py-3">
                                {
                                    cookieService.cookieList.map(({title, description})=> {
                                        return <label key={`${title}-item`} className={'px-3 py-2 [&>[data-detail-content]]:has-[*[data-detail-toggler]:checked]:block'} htmlFor={title}>
                                            <div className='flex items-center justify-between'>
                                                <span>{title}</span>
                                                <div className='flex items-center'>
                                                    <div className="flex justify-between w-auto">
                                                        <Switch onChange={ (event) => { updateCookie(event); } } htmlFor={title}></Switch>
                                                    </div>
                                                    <label htmlFor={`${title}Detail`} className='ml-3'>
                                                        <input type="checkbox" data-detail-toggler className='hidden peer' id={`${title}Detail`} />
                                                        <FontAwesomeIcon icon={faChevronDown} className='duration-100 -rotate-90 peer-checked:-rotate-0'></FontAwesomeIcon>
                                                    </label>
                                                </div>
                                            </div>
                                            <p data-detail-content className="hidden px-3 max-w-96">
                                                {description}
                                            </p>
                                        </label>;
                                    })
                                }
                            </ul>
                            <div className="flex justify-center p-2 pt-0 max-sm:flex-col">
                                <Button
                                    label="Valider"
                                    icon={faCheck}
                                    iconPosition="left"
                                    className="max-sm:flex justify-center !bg-mediumseagreen/50 hover:!bg-mediumseagreen/70 active:!bg-mediumseagreen"
                                    action={() => {
                                        setCookies(false, state.selectedCookies);
                                    }}
                                ></Button>
                                <Button
                                    label="Retour"
                                    icon={faUndo}
                                    iconPosition="left"
                                    className="max-sm:flex justify-center !bg-slate-200 hover:!bg-slate-300/70 active:!bg-slate-300"
                                    action={() => {
                                        updateState({isPending: true, mode: 'simple', selectedCookies: {}});
                                    }}
                                ></Button>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <FontAwesomeIcon
                    onClick={() => {
                        cookieService.invalidate();
                        updateState({isPending: true, mode: 'simple', selectedCookies: {}});
                    }}
                    icon={faCookieBite}
                    className='fixed z-50 p-2 text-2xl rounded-full bg-amber-300 left-5 bottom-5'
                />
            )}
        </>
    );
}
