/**
 * Calculates the time difference from the date that was input until the current date (and time).
 * 
 * @param date - Date for difference calculation (YYYY-mm-dd)
 * @param unit - Unit that shall be returned (days, weeks, months, etc.)
 * @param returnUnit - Wether the selected unit should be appended
 * 
 * @returns The difference in time in selected unit
 */
function getTimeSinceDate(date: string, unit: string, returnUnit: boolean): string {
    let diff: string = '0'
    let diffValue: number = 0
    const currentDate: number = new Date().valueOf() / 1000
    const pastDate: number = new Date(date).valueOf() / 1000

    diffValue = (currentDate - pastDate)

    switch (unit) {
        case 'years':
        case 'y':
            diff = Math.round(diffValue / (86400 * 365)) + ''
            diff = returnUnit ? diff + (diff == '1' ? (' year') : ' years') : diff + ''
            return diff
        case 'months':
        case 'm':
            diff = Math.round(diffValue / (86400 * 30)) + ''
            diff = returnUnit ? diff + (diff == '1' ? (' month') : ' months') : diff + ''
            return diff
        case 'days':
        case 'd':
            diff = Math.round(diffValue / 86400) + ''
            diff = returnUnit ? diff + (diff == '1' ? (' day') : ' days') : diff + ''
            return diff
    }
}

export default getTimeSinceDate