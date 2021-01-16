import { stylesheet } from 'typestyle'
import { palette } from '../../core/palette'

export const classNames = stylesheet({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        color: palette.primary,
        $nest: {
            '&.fullScreen': {
                width: '100vw',
                height: '100vh',
                fontSize: '5rem'
            }
        }
    },
    inlineContainer: {
        display: 'inline',
        padding: '0 .5rem'
    }
})