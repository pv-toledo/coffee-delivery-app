//Um objeto com as cores que compõem o tema da nossa aplicação. Será exportado

export const defaultTheme = {

    colors: {
        'yellow-dark':'#c47f17',
        'yellow': '#dbac2c',
        'yellow-light': '#f1e9c9',

        'purple-dark': '#4b2995',
        'purple': '#8047f8',
        'purple-light': '#ebe5f9',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4d',
        'base-label': '#8d8686',
        'base-hover': '#d7d5d5',

        'base-button': '#e6e5e5',
        'base-input': '#ededed',
        'base-card': '#f3f2f2',

        'background': '#fafafa',
        'white': '#ffffff'
    },

    typography: {

        baloo2: {

            'font-family': '"Baloo 2", sans-serif',

            TitleXL: {
                'font-size': '3rem',
                'line-height': '130%',
                'font-weight': '800'
            }, 

            TitleL: {
                'font-size': '2rem',
                'line-height': '130%',
                'font-weight': '800'
            }, 

            TitleM: {
                'font-size': '1.5rem',
                'line-height': '130%',
                'font-weight': '800'
            }, 

            TitleS: {
                'font-size': '1.25rem',
                'line-height': '130%',
                'font-weight': 'bold'
            }, 

            TitleXS: {
                'font-size': '1.125rem',
                'line-height': '130%',
                'font-weight': 'bold'
            }
        },

        roboto: {
            'font-family': ' "Roboto", sans-serif',

            TitleL: {
                'font-size': '1.25rem',
                'line-height': '130%',
                fontWeight: {
                    'regular': 'regular',
                    'bold': 'bold'
                } 
            }, 

            TitleM: {
                'font-size': '1rem',
                'line-height': '130%',
                fontWeight: {
                    'regular': 'regular',
                    'bold': 'bold'
                } 
            }, 

            TitleS: {
                'font-size': '0.875rem',
                'line-height': '130%',
                'font-weight': 'regular'
            }, 
             

            TitleXS: {
                'font-size': '0.75rem',
                'line-height': '130%',
                'font-weight': 'bold'
            },
            
            Tag: {
                'font-size': '0.625rem',
                'line-height': '130%',
                'font-weight': 'bold'
            },
             

            ButtonG: {
                'font-size': '0.875rem',
                'line-height': '160%',
                'font-weight': 'bold'
            },
             

            ButtonM: {
                'font-size': '0.75rem',
                'line-height': '160%',
                'font-weight': 'regular'
            } 
             
        }

    }
    
}