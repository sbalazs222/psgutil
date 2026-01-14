import validate from './src/regex.js';
import ConsoleColor from './src/colors.js';

export { colorLog, errorLog } from './src/logger.js';
export { ConsoleColor };
export { validateInputIsArray, validateInputIsNotArray, validateRequiredFields, validateFieldCount } from './src/validate.js';
export default validate;