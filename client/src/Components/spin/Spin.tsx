import React from 'react'
import { classNames } from './spin.styles'
import { joinClasses, toggleClass } from '../../core/styles/classUtils'
import { LoadingOutlined } from '@ant-design/icons'
import { SpinProps } from 'antd/lib/spin'

export const Spin = (props: SpinProps & { fullScreen?: boolean; inline?: boolean }) => {
    const { fullScreen, inline } = props
    return (
        <div
            className={joinClasses(
                inline ? classNames.inlineContainer : classNames.container,
                fullScreen ? toggleClass(fullScreen, 'fullScreen') : ''
            )}
        >
            <LoadingOutlined spin />
        </div>
    )
}