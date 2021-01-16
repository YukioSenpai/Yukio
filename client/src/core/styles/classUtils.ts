export const joinClasses = (...cs: string[]) => cs.join(' ')
export const toggleClass = (toggle: boolean, className: string) => (toggle ? className : '')