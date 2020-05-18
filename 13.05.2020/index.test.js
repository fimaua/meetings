import { createLogger } from './index.js'

it('not empty return', () => {
    const logger = createLogger()

    logger.warn('eee')
    logger.error('ttt')
    logger.log('ppp')

    let actual = logger.getRecords('warn')
    let expected = [{ message: 'eee', dateTime: expected.any(Date), type: 'warn' }]

    expect(actual).toEqual(expected)
})