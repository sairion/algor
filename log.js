// const CURRENT_LOG_LEVEL = C.DEBUG;
const LOG_MODE = 'console';

var internalCopy = '';
function _log(...messages) {
  if (LOG_MODE === 'console') {
    console.log(...messages);
  } else if (LOG_MODE === 'copy') {
    if (copy) {
      copy(
        internalCopy += (messages.join(' ') + '\n')
      );
    } else {
      console.warn('No `window.copy()` detected, but message', messages, 'was passed.');
    }
  }
}

function endCopy() {
  internalCopy = '';
}

// log(LOG_LEVELS.DEBUG, 'error!'); // => only shows if log level is debug
export default function log(level, ...messages) {
  //if (level >= CURRENT_LOG_LEVEL) {
    _log(...messages);
  //}
}

const C = {
  NORMAL: 1,
  DEBUG: 0,
  MODE_COPY: 'MODE_COPY',
  MODE_CONSOLE: 'MODE_CONSOLE',
};

// Basic log mode is console output.
C.LOG_MODE = C.MODE_CONSOLE;

// static exports.
log.C = C;
log.endCopy = endCopy; 
