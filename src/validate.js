export function validateInputArray(fields) {
    return (req, res, next) => {
        for (const field of fields) {
            if (Array.isArray(req.body[field])) {
                return res.status(400).json({ error: 'Invalid input' });
            }
        }
        next();
    };
}

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
