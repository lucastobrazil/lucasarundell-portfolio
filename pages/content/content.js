import React, { Fragment } from 'react';
import { ROLES, LINKS } from '../../pages/constants';
import { Gallery, GalleryItem } from '../../components/Gallery';

export const workItemMiniData = [
    {
        title: 'react-with-animation',
        description: 'Open-source library for handling short-lived CSS animations in react',
        linkUrl: 'https://github.com/SmallImprovements/react-with-animation',
        linkLabel: 'Github',
    },
    {
        title: 'cornerstone-custom-elements',
        description: "Custom-built components for the Wordpress 'Cornerstone' editor",
        linkUrl: 'https://github.com/lucastobrazil/si-cornerstone-elements',
        linkLabel: 'Github',
    },
    {
        title: 'knockout-assetlist',
        description: 'A simple asset list with sidebar using KnockoutJS and Bootstrap',
        linkUrl: 'https://github.com/lucastobrazil/knockout-assetlist',
        linkLabel: 'Github',
    },
];

export default {
    ADL: {
        title: 'Arundel',
        role: ROLES.PRINT_ANIMATION,
        year: '2014',
        linkUrl: LINKS.ADL,
        byline: 'Getting creative with mixed media, films and music production.',
        style: {
            backgroundColor: '#C5383A',
            backgroundImage: 'url("/static/work/channels-preview.jpg")',
        },
        modalContent: {
            jobBg: '/static/work/adl_bg.jpg',
            jobDescription:
                "I love art projects - and luckily my musical project 'Arundel' provides me with many opportunities to do them! Over the years I’ve used this project as an outlet for many creative works.",
            jobOverview: {
                team:
                    'As producer and composer, I led a team of musicians for live performances, collaborated with instrumentalists, vocalists and visual artists for recorded works and released many albums under an independent record label.',
                tasks: (
                    <ul>
                        <li>Music composition, arrangement, recording and production</li>
                        <li>Art direction for music videos</li>
                        <li>Concept art creation and preplanning for CD artwork</li>
                        <li>Sculpture, painting and photography</li>
                        <li>Costume and set design</li>
                        <li>Tour posters</li>
                    </ul>
                ),
            },
            tools: ['ableton', 'after-effects', 'premiere', 'photoshop'],
            sections: [
                {
                    title: 'Album Artwork',
                    altBg: true,
                    body: (
                        <p>
                            Created album artwork using mixed media including sculpture, paper, acrylic paints,
                            photography and digital tools.
                        </p>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem src='/static/work/adl-channels.jpg' alt="Artwork for the Channels EP" />
                            <GalleryItem src='/static/work/adl-olive-caves.jpg' alt="Artwork for the Olive Caves EP" />
                            <GalleryItem src='/static/work/adl-nsp.jpg' alt="Artwork for the Naturestrip EP" />
                            <GalleryItem src='/static/work/adl_shirt.png' alt="Shirt design" />
                        </Gallery>
                    ),
                },
                {
                    title: 'Video',
                    altBg: false,
                    body: (
                        <ul>
                            <li>Set design and storyboarding for “Chimpanzee” music video</li>
                            <li>Art direction for experimental visuals using cameras, bubbles, oils and water</li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem type="video">
                                <iframe
                                    title="Chimpanzee Music Video"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/ZGodcPuO7-Y?rel=0&amp;showinfo=0"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            </GalleryItem>
                            <GalleryItem src='/static/work/adl-bts.jpg' alt="Chimpanzee music video - Behind the scenes" />
                            <GalleryItem type="video">
                                <iframe
                                    title="Experimental art"
                                    src="https://player.vimeo.com/video/40588009?color=4777ff&title=0&byline=0&portrait=0"
                                    frameBorder="0"
                                    webkitallowfullscreen="true"
                                    mozallowfullscreen="true"
                                    allowFullScreen
                                />
                            </GalleryItem>
                        </Gallery>
                    ),
                },
            ],
        },
    },
    HHR: {
        title: 'HeavenHR',
        role: ROLES.FE_DEV,
        year: '2015',
        linkUrl: LINKS.HHR,
        byline: 'Transform the UI of a fresh new SaaS platform for HR tech.',
        style: {
            backgroundSize: '250px',
            backgroundColor: '#6698CC',
            backgroundPositionY: 'bottom',
            backgroundImage: 'url("/static/work/hhr-preview.jpg")',
        },
        modalContent: {
            jobBg: '/static/work/hhr_bg.jpg',
            jobDescription:
                'HeavenHR is an online HR tool to manage employee data, insurance, vacation requests and time tracking for freelancers. When I joined, the software had just come out of the MVP phase where many freelancers had been working on the front end - it was a great opportunity to experience life in a very early - stage start up.',
            jobOverview: {
                team:
                    'As the first senior front end developer at Heaven HR, I worked with a team of 15 back end developers, a dedicated web designer and product managers.',
                tasks: (
                    <ul>
                        <li>Refactoring old MVP code</li>
                        <li>Organising CSS (SASS) into a more modular format</li>
                        <li>Defining a design system for UI components</li>
                        <li>Implemented new landing page designs</li>
                        <li>Co-organised the app’s JavaScript code into a modular format</li>
                    </ul>
                ),
            },
            tools: ['sass', 'illustrator', 'jquery', 'bootstrap', 'photoshop'],
            sections: [
                {
                    title: 'Vacation Management',
                    altBg: true,
                    body: (
                        <ul>
                            <li>
                                Helped build pages with Ajax requests instead of full page reloads after each change
                            </li>
                            <li>Implemented inline editing of tables</li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem
                                src='/static/work/hhr-preview.jpg'
                                alt="Vacation Management - a feature I built and assisted with the design"
                            />
                        </Gallery>
                    ),
                },
            ],
        },
    },
    CDDJ: {
        title: 'CrowdDj',
        role: ROLES.UI_DEV,
        year: '2015',
        linkUrl: LINKS.CDDJ,
        byline: 'Empowering music lovers to summon their inner DJ.',
        style: {
            backgroundColor: '#36CF75',
            backgroundImage: 'url("/static/work/cddj-preview.png")',
        },
        modalContent: {
            jobBg: '/static/work/cdj_bg.jpg',
            jobDescription:
                "CrowdDJ is a mobile jukebox app that lets users inside a bar, pub or club directly interact with the music system. They can find out the current song playing, see what's up next, and queue up their favourite songs. ",
            jobOverview: {
                team: 'I worked as a UI designer and developer alongside one native iOS / Android developer.',
                tasks: (
                    <ul>
                        <li>UI & UX design and development</li>
                        <li>App icon design</li>
                        <li>Organisation and preparation of shared assets across platforms</li>
                    </ul>
                ),
            },
            tools: ['less', 'xcode', 'illustrator', 'photoshop', 'android-studio'],
            sections: [
                {
                    title: 'UI design and development',
                    altBg: true,
                    body: (
                        <ul>
                            <li>Users can check-in to a venue and instantly interact with its music playlist</li>
                            <li>Participating venues’ logos are added as branding in the app</li>
                            <li>Users can connect CrowdDJ to Spotify and add songs they like to their own playlists</li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem src='/static/work/cdj-hey.png' alt="CrowdDJ welcome screen" />
                            <GalleryItem src='/static/work/cdj-map.png' alt="CrowdDJ map view" />
                            <GalleryItem src='/static/work/cdj-playlist.png' alt="CrowdDJ playlist screen" />
                        </Gallery>
                    ),
                },
            ],
        },
    },
    MMN: {
        title: 'ManageMyNightlife',
        role: ROLES.UI_DEV,
        year: '2015',
        linkUrl: LINKS.MMN,
        byline: 'Developing company goals into a new product strategy.',
        style: {
            backgroundColor: '#36CF75',
            backgroundImage: 'url("/static/work/mmn-preview.png")',
        },
        modalContent: {
            jobBg: '/static/work/mmn_bg.jpg',
            jobDescription: (
                <Fragment>
                    <p>
                        ManageMyNightlife (MMN) is an iOS, Android and Web app for venue managers of venues that use the{' '}
                        <a href="http://www.nightlife.com.au" target="_blank" rel="noopener noreferrer">
                            Nightlife Music
                        </a>{' '}
                        video playback system. The system outputs music videos and advertising onto the TV screens
                        around the venue.
                    </p>
                    <p>
                        In the past, managers interacted with the system directly via a very old interface. MMN was
                        created as a new front end that communicated with the system via a new REST API.{' '}
                    </p>
                </Fragment>
            ),
            jobOverview: {
                team:
                    'For this app, I worked as Lead Product Designer and Front End Developer alongside a team of 5 Full Stack developers.',
                tasks: (
                    <ul>
                        <li>
                            As lead designer in the Marketing department, I translated the brand's indentity into a
                            visual identity for this app's UI
                        </li>
                        <li>Product design - all features</li>
                        <li>UI &amp; UX design and development - iOS, Android and Web</li>
                        <li>
                            Design and development of an advertising management module and dynamic advertisement
                            creation widget
                        </li>
                    </ul>
                ),
            },
            tools: ['less', 'illustrator', 'photoshop', 'knockout'],
            sections: [
                {
                    title: 'App Design and Style',
                    altBg: true,
                    body: (
                        <p>
                            Working with with three back-end developers, I created the UI across all platforms, as well
                            as getting ‘hands on’ in the code. After release, I made improvements to the UX ongoing as
                            we discovered how users were interacting with the app via user feedback.
                        </p>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem src='/static/work/mmn-ios.png' alt="ManageMyNightlife - playlist screen" />
                            <GalleryItem src='/static/work/mmn-ios-playlist.png' alt="ManageMyNightlife - search screen" />
                            <GalleryItem src='/static/work/mmn-ios-video.png' alt="ManageMyNightlife - video output screen" />
                            <GalleryItem src='/static/work/mmn-ios-vol.png' alt="ManageMyNightlife - controls screen" />
                            <GalleryItem src='/static/work/mmn-home.png' alt="ManageMyNightlife - web playlist screen" />
                            <GalleryItem src='/static/work/mmn-playlist-overlay.png' alt="ManageMyNightlife - song modal screen" />
                            <GalleryItem src='/static/work/mmn-web-login.jpg' alt="ManageMyNightlife - login screen" />
                        </Gallery>
                    ),
                },
                {
                    title: 'Advertising Platform',
                    altBg: false,
                    body: (
                        <ul>
                            <li>Users can manage advertising content that is displayed on TV screens in a venue</li>
                            <li>
                                I designed and developed an interface to let users create their own
                                &#39;Text-over-image&#39; advertisements in the browser
                            </li>
                        </ul>
                    ),
                    gallery: (
                        <Fragment>
                            <GalleryItem src='/static/work/mmn-screen.jpg' alt="Advertising file management for ManageMyNightlife" />
                            <GalleryItem src='/static/work/mmn-web-da.jpg' alt="ManageMyNightlife - song view screen" />
                            <p>
                                My of my work on the Advertising platform was coding. Although there was not a lot of
                                time to make the UI style more solid, the functionality was there.
                            </p>
                            <p>Here's a screen capture:</p>
                            <GalleryItem type="video">
                                <iframe
                                    title="Advertising TOI Screen"
                                    src="https://player.vimeo.com/video/257383148?color=4777ff&title=0&byline=0&portrait=0"
                                    width="470"
                                    height="378"
                                    frameBorder="0"
                                    webkitallowfullscreen="true"
                                    mozallowfullscreen="true"
                                    allowFullScreen
                                />
                            </GalleryItem>
                        </Fragment>
                    ),
                },
            ],
        },
    },
    NM: {
        title: 'Nightlife Music',
        role: ROLES.WEB_DESIGN,
        year: '2009 - 2015',
        linkUrl: LINKS.NM,
        byline: 'Leading a team of designers to transform a brand.',
        style: {
            backgroundColor: '#ADD6D5',
            backgroundImage: 'url("/static/work/nightlife-preview.jpg")',
        },
        modalContent: {
            jobBg: '/static/work/nm_bg.jpg',
            jobDescription:
                'Nightlife Music is an Australian company providing music and visual solutions to over 3000 bars and venues Australia-wide.',
            jobOverview: {
                team:
                    "I started as the company's sole designer and as the company grew, I was promoted to Design Lead. I managed a team of 3 junior designers.",
                tasks: (
                    <ul>
                        <li>
                            <strong>Led all design projects</strong> for Australia’s #1 music video and advertising
                            solutions provider to over 3,000 venues Australia-wide
                        </li>
                        <li>
                            <strong>Designed marketing campaigns</strong>, digital artwork and user interfaces for two
                            enterprise digital products
                        </li>
                        <li>
                            <strong>Grew and managed a team of designers</strong> responsible for delivery of
                            cross-platform projects and features that successfully balance brand and user needs and are
                            commercially sound.
                        </li>
                        <li>
                            <strong>Provided training</strong> in Adobe products to juniors at Nightlife HQ
                        </li>
                        <li>Conducted meetings and daily standups communicating outcomes from management meetings</li>
                        <li>
                            <strong>Responsible for UI Design and Front End development</strong> of enterprise products
                            for over 3,000 clients / users{' '}
                        </li>
                        <li>
                            <strong>Developed apps</strong> in PHP, MySQL, JS, Xcode, Java and Grunt build tools
                        </li>
                        <li>
                            Designed internal <strong>reference documentation</strong> for our APIs
                        </li>
                        <li>
                            <strong>Corporate website</strong> - developed and maintained front and back end
                        </li>
                    </ul>
                ),
            },
            tools: ['indesign', 'after-effects', 'premiere', 'photoshop', 'wordpress', 'sass'],
            sections: [
                {
                    title: 'Website design and development',
                    altBg: true,
                    body: (
                        <ul>
                            <li>Designing all content for corporate website</li>
                            <li>Exporting images and optimising video</li>
                            <li>Developing a custom Twitter widget on the home page</li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem src='/static/work/nm-website-home-1.jpg' alt="Nightlife Music website - home page" />
                            <GalleryItem src='/static/work/nm-website-home-2.jpg' alt="Nightlife Music website - alt home page" />
                            <GalleryItem src='/static/work/nm-website-wwd.jpg' alt="Nightlife Music website - what we do page" />
                            <h3 style={{ width: '100%' }}>Explainer video</h3>
                            <p>
                                For this explainer video, I produced the graphics, direction and audio production.
                                Working with an animator, we brought the characters to life.
                            </p>
                            <iframe
                                title="What We Do - Nightlife Music"
                                src="https://player.vimeo.com/video/260618850?color=4777ff&title=0&byline=0&portrait=0"
                                width="640"
                                height="359"
                                frameBorder="0"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                                allowFullScreen
                            />
                        </Gallery>
                    ),
                },
                {
                    title: 'Print Design',
                    altBg: false,
                    body: (
                        <ul>
                            <li>Creative direction and concept design</li>
                            <li>Designing layouts and assets</li>
                            <li>Preparing designs for offset printing</li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem
                                src='/static/work/nm-goodnightout.jpg'
                                alt="Nightlife Music advertisement for 'A great Night Out'"
                            />
                            <GalleryItem
                                src='/static/work/nm-summer.jpg'
                                alt="Nightlife Music advertisement for 'Summer Entertainment'"
                            />
                            <GalleryItem src='/static/work/nm-venue-sound.jpg' alt="Nightlife Music advertisement for venue acoustics" />
                        </Gallery>
                    ),
                },
            ],
        },
    },
    SI: {
        title: 'Small Improvements',
        role: ROLES.UI_DEV,
        year: '2016 - Present',
        linkUrl: LINKS.SI,
        byline: 'Evolving a team, a product and building awesome features.',
        style: {
            backgroundSize: '270px',
            backgroundColor: '#FFDB4D',
            backgroundImage: 'url("/static/work/si-preview.png")',
        },
        modalContent: {
            jobBg: '/static/work/si_bg.png',
            jobDescription:
                'Small Improvements is a web-based feedback tool where companies and their staff can conduct 360º feedback rounds, set objectives, conduct 1:1 meetings, give praise / kudos and write formal performance reviews.',
            jobOverview: {
                team: `As Design Coordinator, I led design-specific projects and workshops such as the style guide and evolution of the design system. I helped grow the design team from 3 to 6. Development teams were cross-functional and consisted of one designer and two full-stack developers.
                `,
                tasks: (
                    <ul>
                        <li>Coordinate design projects across teams and manage workloads</li>
                        <li>Mentor and support growth of design team members</li>
                        <li>Steer the overall design of the product</li>
                        <li>Gather requirements from Product Managers</li>
                        <li>Develop components in React, Angular and HTML/CSS</li>
                        <li>Create wireframes and mocks using Sketch and InVision</li>
                        <li>Create visual specifications to deliver to developers</li>
                        <li>
                            Manage higher-level aspects of design such as style guide, component structure and
                            information architecture
                        </li>
                    </ul>
                ),
            },
            tools: ['sketch', 'invision', 'less', 'react', 'angular', 'webpack', 'slack', 'confluence'],
            sections: [
                {
                    title: 'Feature: 1:1  Meetings',
                    altBg: true,
                    body: (
                        <ul>
                            <li>
                                The latest feature at Small Improvements is designed as a place to keep track of your
                                1:1 meetings. Both participants can prepare an agenda (Talking Points) and add notes
                                afterwards
                            </li>
                            <li>
                                Designed UI for individual meetings, dashboard and meetings ‘space’ where users can see
                                all of their 1:1 meetings
                            </li>
                            <li>Coded many reusable React components</li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem src='/static/work/si-meetings-dashboard.png' alt="1:1 Meeting dashboard in Small Improvements." />
                            <GalleryItem src='/static/work/si-meetingnote.png' alt="A 1:1 Meeting in Small Improvements." />
                            <GalleryItem src='/static/work/si-checkable-item.gif' alt="Checkable talking points." />
                        </Gallery>
                    ),
                },
                {
                    title: 'Activity Stream',
                    altBg: false,
                    body: (
                        <ul>
                            <li>
                                In an effort to increase transparency and engagement within the tool, we created an
                                Activity Stream to present recent happenings
                            </li>
                            <li>
                                Designed the UI of many content items appearing in the stream in Sketch and coded them
                                in React
                            </li>
                            <li>
                                Created detailed specifications of how different activity content would be aggregated
                                and the different edge cases that can occur
                            </li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem
                                src='/static/work/si-as-whole.png'
                                alt="A preview of some of the 'Content Items' shown in the activity stream."
                            />
                            <GalleryItem
                                src='/static/work/si-activity-stream.png'
                                alt="A preview of some of the 'Content Items' shown in the activity stream."
                            />
                            <GalleryItem
                                src='/static/work/si-as.png'
                                alt="A preview of some of the 'Content Items' shown in the activity stream."
                            />
                        </Gallery>
                    ),
                },
                {
                    title: 'Living Style Guide',
                    altBg: true,
                    body: (
                        <ul>
                            <li>Organised our components into a design system</li>
                            <li>
                                Built a system to document the components and UI patterns used within the tool and also
                                to develop a vision for the future of Small Improvements' UI
                            </li>
                            <li>
                                Acted as an advocate for using it and encouraged developers to proactively document new
                                components
                            </li>
                            <li>
                                Connected designers and developers to ensure cohesion between the development of Sketch
                                library and React components
                            </li>
                        </ul>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem
                                src='/static/work/si-styleguide.png'
                                alt="The Small Improvements style guide documenting our design patterns."
                            />
                            <GalleryItem src='/static/work/si-comment.png' alt="A comment component in the SI style guide." />
                            <GalleryItem src='/static/work/si-loading-content-indicator.png' alt="A loading content indicator in the SI style guide" />
                        </Gallery>
                    ),
                },
                {
                    title: 'Responsive overhaul and style updates',
                    body: (
                        <span>
                            <ul>
                                <li>
                                    When I joined, we were in the process of converting the SI app to be
                                    mobile-responsive.
                                </li>
                                <li>
                                    We took this opportunity to rethink and refactor a lot of the code to follow a
                                    consistent pattern and structure.
                                </li>
                                <li>
                                    This also meant an opportunity to update the style of many components (well,
                                    basically all of them!)
                                </li>
                                <li>
                                    Rolled out a fresh new colour palette across the app based on colours in new
                                    illustrations provided by a freelance artist
                                </li>
                            </ul>
                        </span>
                    ),
                    gallery: (
                        <Gallery>
                            <GalleryItem
                                style={{ width: '100%' }}
                                src='/static/work/siBeforeAfter.png'
                                alt="Small Improvements before and after"
                            />
                        </Gallery>
                    ),
                },
            ],
        },
    },
};
