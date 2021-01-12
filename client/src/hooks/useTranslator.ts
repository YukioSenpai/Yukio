import React, { useContext } from 'react'
import { languageTag, MessageProvider } from 'typed-intl'
import { Locale, LocaleContext } from '../business/Local'

const translator = <L>(C: React.Context<L>, unwrap: (locale: L) => string) => <A>(
    a: MessageProvider<A>
): A => {
    const locale = useContext(C)
    return a.messagesFor(languageTag(unwrap(locale)))
}

export const useTranslator = translator(LocaleContext, Locale.unwrap)