
import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
    container: {
        width: '100%',
        $nest: {
            '.ant-list-empty-text': { display: 'none' },
            '.ant-list-pagination': { textAlign: 'center' },
            '&.paginated': {
                paddingBottom: '2rem'
            }
        }
    }
})