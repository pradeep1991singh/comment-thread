const { createLogger, format, transports } = require('winston');
const { combine, colorize, label, printf, simple, timestamp } = format;
const LEVEL = process.env.NODE_ENV === 'production' ? 'info' : 'debug';

// const loggerFormat = printf(({timestamp, label, level, message, ...rest}) => {
//   return `${timestamp} [${label}] ${level}: ${message}: ${rest}`;
// });

const loggerFormat = combine(
  label({ APP: 'ProductQuickView APP' }),
  colorize(),
  timestamp(),
  simple()
);

const logger = createLogger({
  level: LEVEL,
  format: loggerFormat,
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.File({ filename: './.logs/error.log', level: 'error' }),
    new transports.File({ filename: './.logs/combined.log' }),
  ]
});


//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: loggerFormat
  }));
}

module.exports = logger
