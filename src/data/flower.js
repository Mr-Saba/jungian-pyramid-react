import everyperson from '../assets/flower/everyperson.png'
import explorer from '../assets/flower/explorer.png'
import wise from '../assets/flower/wise.png'
import magician from '../assets/flower/magician.png'
import revolutionary from '../assets/flower/revolutionary.png'
import hero from '../assets/flower/hero.png'
import creator from '../assets/flower/creator.png'
import caregiver from '../assets/flower/caregiver.png'
import ruler from '../assets/flower/ruler.png'
import lover from '../assets/flower/lover.png'
import trickster from '../assets/flower/trickster.png'
import innocent from '../assets/flower/innocent.png'

const flowerStaticData = [
    {
        "sectorTitle": "learning\nair",
        "circles": [
            {
                "title": "everyperson",
                "imgSource": everyperson
            },
            {
                "title": "explorer",
                "imgSource": explorer,
            },
            {
                "title": "wise",
                "imgSource": wise
            }
        ]
    },
    {
        "sectorTitle": "results\nfire",
        "circles": [
            {
                "title": "magician",
                "imgSource": magician
            },
            {
                "title": "revolutionary",
                "imgSource": revolutionary
            },
            {
                "title": "hero",
                "imgSource": hero
            }
        ]
    },
    {
        "sectorTitle": "stabilizing\nearth",
        "circles": [
            {
                "title": "creator",
                "imgSource": creator,
            },
            {
                "title": "caregiver",
                "imgSource": caregiver
            },
            {
                "title": "ruler",
                "imgSource": ruler
            }
        ]
    },
    {
        "sectorTitle": "people\nwater",
        "circles": [
            {
                "title": "lover",
                "imgSource": lover
            },
            {
                "title": "trickster",
                "imgSource": trickster
            },
            {
                "title": "innocent",
                "imgSource": innocent
            }
        ]
    }
]


const flowerDynamicStepData = [
    {
        "titles": {
            "title": "behaviors",
            "definition": "(what i do)",
            "description": "In . . . period of time I want to be able to present a professional behaviour profile which includes the following characteristics:",
        },
        "options": [
            [
                "I follow rules and traditional expectations. I connect authentically and inclusively with others.",
                "I take proactive steps to seek outcomes, embrace new challenges, and pursue uncharted paths.",
                "I educate and guide others by sharing knowledge and promoting truth. I focus on intellectual growth.",
            ],
            [
                "I conjure transformations that result in innovative outcomes. I spark wonder and open-hearted relationships.",
                "I challenge social norms, I promote new ideologies, I inspire innovative thinking.",
                "I operate outside my comfort zone, I set and achieve ambitious goals,  I inspire others to act boldly.",
            ],
            [
                "I innovate. I express originality and develop meaningful new ideas.",
                "I support and nurture, I create emotional safety, and I ensure the well-being of others.",
                " I establish order, provide consistent structured leadership and clear instructions and expectations.",
            ],
            [
                "I forge deep, meaningful relationships. I elevate emotional and aesthetic experiences.",
                "I infuse situations with  humor, spontaneity and fun. I take risks and manipulate or disrupt the status quo.",
                "I create a safe and trusting environment and fosters a peaceful atmosphere.",
            ],
        ],
    },
    {
        "titles": {
            "title": "Traits/Attributes",
            "definition": "(Manifested Characteristics)",
            "description": "In . . . period of time I want to be able display the following personality traits:",
        },
        "options": [
            [
                "Relatableness, devotion, humility, and practicality.",
                "Curiosity, adventurousness, self-reliance.",
                "Intelligence, rationality, scholarliness.",
            ],
            [
                "Surprise, intuition, big dreams.",
                "Boldness, rebelliousness, proactivity, unconventional thinking.",
                "Courageousness, boldness, determination, as well as charisma under pressure.",
            ],
            [
                "Imagination, originality, and focus on both artistic expression and practical inventions.",
                "Nurturing, supportive, devoted and approachable.",
                "Command, initiative-taker, responsibility and authoritativeness.",
            ],
            [
                "Compassion, empathy, support, and passion.",
                "Wit, energy and liveliness with a knack for breaking serious moods.",
                "Honesty, transparency, straightforwardness, peace.",
            ],
        ] 
    },
    {
        "titles": {
            "title": "Core Competencies",
            "definition": "(What You Excel At)",
            "description": "In . . . period of time I want to be able manifest following core competencies:",
        },
        "options": [
            [
                "I encourage hard work, fitting in, and following the rules.",
                "I encourage self-discovery and inspire curiosity, freedom and individual uniqueness.",
                "I integrate and effectively communicate complex ideas.",
            ],
            [
                "I deliver extraordinary results through creative and transformative processes.",
                "I introduce innovative ideas that disrupt norms and spark social progress.",
                "I drive action and motivate others toward a meaningful goal.",
            ],
            [
                "I generate and execute visionary ideas to create unique and valuable outcomes.",
                "I foster well-being for groups and individuals.",
                "I lead, I maintain both growth and stability, and manage systems efficiently.",
            ],
            [
                "I enhance interpersonal relationships through emotional intelligence and connectedness.",
                "I bring joy and light-hearted energy by creating memorable experiences.",
                "I build trust and reducing complexity by offering clarity and commitment.",
            ],
        ] 
    },
    {
        "titles": {
            "title": "Propositions",
            "definition": "(What You Offer)",
            "description": "In . . . period of time I want to be able offer my clients:",
        },
        "options": [
            [
                "I provide realism, I champion functional and reliable solutions for all.",
                "I inspire you to investigate, grow, and embrace uniqueness and authenticity.",
                "I deliver clarity and insight to empower informed decisions.",
            ],
            [
                "I transform dreams into reality. Provides exceptional experiences.",
                "I provide opportunities to challenge norms and inspire change.",
                "I Leads others to overcome obstacles and achieve greatness.",
            ],
            [
                "I turn originality into reality, and inspire others through innovation.",
                "I offer support, empathy, and reassurance to foster resilience.",
                "I provide order, structure, and authority for long-term prosperity.",
            ],
            [
                "I celebrate connection, intimacy, and shared emotional experiences.",
                "I provide a fun time and lighthearted energy.",
                "I offer safety, simplicity, and positivity.",
            ],
        ] 
    },
    {
        "titles": {
            "title": "Main Values",
            "definition": "(What Drives You)",
            "description": "In . . . period of time I want to connect to the following values:",
        },
        "options": [
            [
                "Belonging, modesty, equality.",
                "Discovery, freedom, adventure.",
                "Knowledge, wisdom, truth.",
            ],
            [
                "Transformation, originality, wonder.",
                "Freedom, innovation, change.",
                "Courage, achievement, mastery.",
            ],
            [
                "Creativity, imagination, innovation.",
                "Compassion, service, protection.",
                "Leadership, stability, control.",
            ],
            [
                "Passion, beauty, intimacy.",
                "Joy, fun, spontaneity.",
                "Trust, optimism, simplicity.",
            ],
        ] 
    },
]

export {flowerDynamicStepData, flowerStaticData}