import { FC } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Expend from '../components/reusable-ui/Expend';

const title: string = process.env['NODE_ENV'] === 'development' ? 'La voie pailletée (DEV)': 'La voie pailletée';

const CookiePage: FC = () => {
    return(
        <main className="flex flex-col h-full min-h-screen">
            <title>{title}</title>

            {/* Header */}
            <Header />

            <section className='p-10'>
                <h1 className='text-2xl'>Nos cookies</h1>
                <p>Ce site utilise des cookies afin de mesurer l'impact de l'évènement</p>
                <p>Pour cela, nous avons décidé de collecter un certain nombre de données sur les visiteurs</p>
                <p>Voici une liste exhaustive des données que en acceptant les cookies du site vous concentez a ce que <Link className='text-blue-500 underline' to={{pathname: 'https://lavoiepailletee.fr'}}>La Voie Pailletée</Link> et <Link className='text-blue-500 underline' to={{pathname: 'https://pandacrp.com'}}>PandaCrp</Link> puissent collecté</p>
                <hr className='my-3' />
                <p>Analystics:</p>
                <ul className='pl-5 list-disc list-outside [&_ul]:list-[revert] [&_ul]:pl-5'>
                    <li>
                        <span>Données géographique approximative</span>
                        <ul>
                            <li>
                                <span>Pays & ville</span>
                                <Expend label='Pourquoi ?'>
                                    <p>Afin de vous fournir un site web accessible et rapide, nous avons besoin de savoir si nous devons mettre en place plusieurs hébergeurs dans différent pays</p>
                                    <p>Cela nous permet également de négocier plus facilement des partenariat pour l'évènement en justifiant que certains de nos visiteurs font parti de leurs zone géographique</p>
                                </Expend>
                                <Expend label='Quel est la précision ?'>
                                    <p>La localisation est estimée via les services de Google</p>
                                    <p>Pour cela, ils récupère l'endroit approximatif d'ou votre adresse IP emmet</p>
                                    <p>La localisation a généralement une précision de ~50Km vous rapprochant souvent de la métropole la plus proche</p>
                                </Expend>
                                <Expend label='L’utilisation d’un VPN peut elle influencer ma localisation ?'>
                                    <p>La localisation par Google se basant sur votre adresse IP, l'utilisation d'un VPN déplacera donc effectivement la localisation</p>
                                </Expend>
                            </li>
                            <li>
                                <Expend label='La langue de votre navigateur'>
                                    <p>Le cite ne prend pour l'instant que le français, la collecte des données linguistique de votre navigateur nous permettra de voir si une traduction est nécessaire</p>
                                </Expend>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>Empreinte numérique</span>
                        <ul>
                            <li>
                                <Expend label='Navigateur & Système d’opération'>
                                    <p>Chaque navigateur et système d'opération utilise des technologies différentes a la fois pour CSS (qui permet d'afficher la page avec du style), le JavaScript (Qui permet de rendre le site dynamique) et le HTML (qui permet de créer la structure du site)</p>
                                    <p>La différence de technologie entre chaque navigateur fait que certaines fonctionnalité vont être disponible sur certain mais pas sur d'autres</p>
                                    <p>Savoir quels navigateurs sont utilisé nous permettra de faire évoluer le site en le gardant compatible pour le plus d'utilisateurs</p>
                                </Expend>
                            </li>
                            <li>
                                <Expend label='Résolution d’écran & plateforme'>
                                    <p>Chaque écran et plateforme utilise une taille d'écran différente, afin de garder le design du site esthétique et utilisable, savoir si des utilisateurs utilisent des tailles que nous n'avons pas pris en compte pendant le développement nous permettra de mettre a jour le site au plus vite pour qu'il soit utilisable par le plus grand nombre</p>
                                </Expend>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>Expérience utilisateur</span>
                        <ul>
                            <li>
                                <Expend label='Pages et lien visité sur le site'>
                                    <p>La collecte de fréquentation du site permet de prouver le sérieux ainsi que la visibilité qu'apporte l'évènement a la fois a l'organisation de La Voie Pailletée, aux partenaires, mais également aux différents associations et fondations que nous pourrions contacter pour de futur éditions</p>
                                </Expend>
                            </li>
                            <li>
                                <Expend label='Redirection vers les streamers'>
                                    <p>Afin de comprendre les centre d'intérêts de nos visiteurs ainsi que de mesurer l'impact des participants a l'évènement, nous avons choisi de compter le nombre de clics sur la page <Link to={{pathname:'/streamers'}} className='text-blue-500 underline'>/streamers</Link></p>
                                </Expend>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className='my-3' />
                <p>Referer</p>
                <p>Afin de d'identifier quel participant est a l'origine de votre visite, nous utilisons des liens 'Referer', cela signifie que les liens sur les quels vous cliquez peuvent contenir un identifiant unique</p>
                <p>Exemple: <pre>{document.location.host}/?ref=73c049</pre></p>
                <p>Cela nous permet de vous rediriger vers la cagnotte du streamer qui vous a partagé le lien ainsi qu'estimer l'engagement généré par les participant</p>
                <hr className='my-3' />
                <Expend label='Les données collectées peuvent elles être revendu ?'>
                    <p>La voie pailletée s'engage au fait que l'ensemble des données collectées ne soit utilisé que comme preuve de sérieux et de la visibilité apportée par l'évènement</p>
                    <p>En aucun cas, les données collectées ne pourront être vendu ou échangée a des fins pécuniaire</p>
                </Expend>
                <Expend label='Les données collectées pourront elle permettre de m’identifier ?'>
                    <p>l'entièreté des données collectées sont anonymisé et détachée, cela fait qu'a partir des données collecté, il est impossible d'identifier un utilisateur parmi l'ensemble des données collectées</p>
                    <p>Pour exemple concret, les données géographique, les données numérique et les données d'expérience utilisateurs sont toutes isolées les unes des autres, il est donc impossible d'isoler la navigation d'un utilisateur</p>
                </Expend>
                <Expend label='Puis-je demander la suppression de mes données ?'>
                    <p>l'entartée des données collectées étant totalement anonymisé, il nous est impossible d'identifier un utilisateur en particulier, par conséquent nous n'avons donc pas implémenté la suppression des données personnels</p>
                </Expend>
                <Expend label='Combien de temps les données collectées seront gardée ?'>
                    <p>Les données collectées via Google Analytics ne sont gardée que pendant 60 jours a partir de leurs envoie</p>
                </Expend>
                <Expend label='Qui gère mes données ?'>
                    <p>Les données collectées sur le site <Link to={{pathname: 'https://lavoiepailletée.fr'}} className='text-blue-500 underline'>La Voie Pailletée</Link> sont collectée au nom de l'association La Voie Pailletée</p>
                    <p>Pour le développement et la maintenance technique du site web, <Link to={{pathname: 'https://lavoiepailletée.fr'}} className='text-blue-500 underline'>La Voie Pailletée</Link> fait appel à des bénévoles (<Link className='text-blue-500 underline' to={{pathname: 'https://github.com/h0ldhaven'}}>H0ldhaven</Link> et <Link className='text-blue-500 underline' to={{pathname: 'https://github.com/norookezi'}}>Norookezi</Link>). Ces bénévoles peuvent être amenés à interagir avec les données dans le cadre de leurs missions techniques, mais s'engagent à respecter la confidentialité et la sécurité de ces données.</p>
                    <p>L'ensemble des données collectées sont hébergé chez <Link className='text-blue-500 underline' to={{pathname: 'https://google.com'}}>Google LLC</Link> filière de <Link className='text-blue-500 underline' to={{pathname: 'https://abc.xyz/'}}>Alphabet Inc.</Link> via le service <Link className='text-blue-500 underline' to={{pathname: 'https://analytics.google.com'}}>Google Analytics</Link></p>
                </Expend>
            </section>

            {/* Footer */}
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
};

export default CookiePage;
