import { ordString } from 'fp-ts/lib/Ord'
import * as t from 'io-ts'
import { fromNewtype } from 'io-ts-types/lib/fromNewtype'
import { getOrd, iso, Newtype } from 'newtype-ts'
import React from 'react'

interface LocaleBrand {
    readonly Locale: unique symbol
}
export interface Locale extends Newtype<LocaleBrand, string> { }
export const LocaleCodec = fromNewtype<Locale>(t.string)
// eslint-disable-next-line
export const Locale = { ...iso<Locale>(), ...getOrd<Locale>(ordString) }

const defaultLocale = Locale.wrap('fr')

export const LocaleContext = React.createContext(defaultLocale)