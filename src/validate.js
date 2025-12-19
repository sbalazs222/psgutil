/** Middleware to validate if provided fields are arrays in request body
 * 
 * @param {Array<string>} fields Fields to check in request body
 * 
 * @returns status code 400, next middleware if check fails for any of the fields
 * 
 */
export function validateInputIsArray(fields) {
    return (req, res, next) => {
        for (const field of fields) {
            if (!Array.isArray(req.body[field])) {
                return res.status(400).json({ error: 'Invalid input' });
            }
        }
        next();
    };
}

/** Middleware to validate if required fields are present in request body 
 * 
 * @param {Array<string>} fields Required fields in request body
 * @returns status code 400, next middleware if any of the required fields is not present
 */
export function validateRequiredFields(fields) {
    return (req, res, next) => {
        if (req.body == null || typeof req.body !== 'object') {
            return res.status(400).json({ error: 'Invalid request body' });
        }
        for (const field of fields) {
            if (!req.body[field] && req.body[field] !== 0) {
                return res.status(400).json({ error: 'Missing required fields' });
            }
        }
        next();
    };
}

/** Middleware to validate expected fields in request body
 * 
 * @param {Array<string>} expectedCount Expected count of fields in request body
 * @returns status code 400, next middleware if an incorrect number of fields is provided
 */
export function validateFieldCount(expectedCount) {
    return (req, res, next) => {
        if (req.body == null || typeof req.body !== 'object') {
            return res.status(400).json({ error: 'Invalid request body' });
        }
        if (Object.keys(req.body).length !== expectedCount) {
            return res.status(400).json({ error: 'Unexpected number of fields' });
        }
        next();
    };
}

/** Middleware to validate if provided fields are not arrays in request body
 * 
 * @param {Array<string>} fields Fields to check in request body
 * 
 * @returns status code 400, next middleware if check fails for any of the fields
 * 
 */
export function validateInputIsNotArray(fields) {
    return (req, res, next) => {
        for (const field of fields) {
            if (Array.isArray(req.body[field])) {
                return res.status(400).json({ error: 'Invalid input' });
            }
        }
        next();
    };
}