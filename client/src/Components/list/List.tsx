import { List } from 'antd'
import { ListProps } from 'antd/lib/list'
import { PaginationConfig } from 'antd/lib/pagination'
import { isEmpty } from 'fp-ts/lib/Array'
import React, { useLayoutEffect, useRef } from 'react'
import { joinClasses, toggleClass } from '../../core/styles/classUtils'
import { classNames } from './list.styles'

const defaultPaginationParams: PaginationConfig = {
    hideOnSinglePage: true,
    simple: true
}

const L = <A extends object>({
    pagination,
    defaultPagination,
    className,
    header,
    emptyContent,
    dataSource,
    customScrollRef,
    ...rest
}: ListProps<A> & {
    defaultPagination?: boolean
    header?: React.ReactNode
    emptyContent?: React.ReactNode
    customScrollRef?: React.RefObject<HTMLDivElement>
}) => {
    const pag = defaultPagination
        ? defaultPaginationParams
        : pagination
            ? { ...defaultPaginationParams, ...pagination }
            : undefined
    const elemRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ref = customScrollRef ? customScrollRef.current : elemRef.current
        ref!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [pag && pag.current, dataSource && dataSource.length])

    const onChange = (page: number) => {
        if (pag) {
            const ref = customScrollRef ? customScrollRef.current : elemRef.current
            ref!.scrollIntoView({ behavior: 'smooth', block: 'start' })
            if (pag.onChange) {
                return pag.onChange(page)
            }
        }
    }

    return (
        <>
            <div ref={elemRef} />
            {header ? header : null}
            {emptyContent && dataSource && isEmpty(dataSource) ? emptyContent : null}
            <List<A>
                {...rest}
                key={pag ? pag.current : undefined}
                dataSource={dataSource}
                pagination={pag ? { ...pag, onChange } : undefined}
                itemLayout="vertical"
                className={joinClasses(
                    className || '',
                    classNames.container,
                    toggleClass(pag !== undefined, 'paginated')
                )}
            />
        </>
    )
}
export { L as List }