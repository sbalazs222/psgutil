export const usernameRegex = /^[a-zA-Z0-9_.-]{3,20}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?[0-9]{7,15}$/;

/**
 * Validates a given input based on the specified type.
 *
 * @typedef {('username'|'password'|'email'|'phone')} ValidationType
 *
 * Literals meanings (exact rules from regexes):
 * - `'username'` — 3–20 characters; letters, numbers, underscores, dots, hyphens allowed
 * - `'password'` — Minimum 8 characters; must include at least one lowercase, one uppercase, one number, and one special character (!@#$%^&*)
 * - `'email'` — Must match standard email format (something@domain.tld)
 * - `'phone'` — 7–15 digits; optional leading plus (+) for country code
 *
 * @param {ValidationType} type - The kind of input to validate.
 * @param {string} input - The value to test against the validation rules.
 * @returns {boolean} Returns `true` if the input passes the validation, otherwise `false`.
 *
 * @throws {Error} Throws if an invalid type is provided.
 *
 * @example
 * validate('email', 'user@example.com'); // true
 * validate('username', 'John#Doe'); // true
 * validate('password', 'Passw0rd!'); // true
 * validate('phone', '+1234567890'); // true
 */
export default function validate(type, input) {
    switch (type) {
        case 'username':
            return usernameRegex.test(input);
        case 'password':
            return passwordRegex.test(input);
        case 'email':
            return emailRegex.test(input);
        case 'phone':
            return phoneRegex.test(input);
        default:
            throw new TypeError('Invalid validation type');
    }
}