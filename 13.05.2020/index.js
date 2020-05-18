//input: none
//output: obj

export function createLogger() {
    let logs = [];

    function addMessage(type, text) {
        logs.push({
            message: text,
            dateTime: new Date(),
            type: type
        });
    }

    function warn(text) {
        addMessage('warn', text)
    }

    function error(text) {
        addMessage('error', text)
    }

    function log(text) {
        addMessage('log', text)
    }

    function getRecords(text) {
        let filtered = text ? logs.filter(el => el.type === text) : logs;
        return filtered.sort((a, b) => b.dateTime - a.dateTime);
    }
    return {
        warn,
        error,
        log,
        getRecords
    };
}
let logger1 = createLogger();

logger1.warn('eeeee');
logger1.warn('ttttt');
logger1.error('PPPPPP');
logger1.log('OOOOOO');

// setInterval(() => {
//     logger1.warn('ddddd');
//     console.log("calledd");
// }, 3000);