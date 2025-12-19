const enabled = process.stdout.isTTY;

const raw = {
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  purple: '\x1b[35m',
  gray: '\x1b[90m',
  reset: '\x1b[0m',
}

const ConsoleColor = enabled
  ? raw
  : Object.fromEntries(Object.keys(raw).map(k => [k, ""]));

export default ConsoleColor;