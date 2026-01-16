export const usernameRegex = /^[a-zA-Z0-9_.-]{3,20}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?[0-9]{7,15}$/;
export const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
export const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
export const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
export const dateISORegex = /^\d{4}-\d{2}-\d{2}$/;
export const hexColorRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;

/**
 * Validates a given input based on the specified type.
 *
 * @typedef {('username'|'password'|'email'|'phone'|'url'|'uuid'|'ipv4'|'ipv6'|'date'|'hexcolor')} ValidationType
 *
 * Literals meanings (exact rules from regexes):
 * - `'username'` — 3–20 characters; letters, numbers, underscores, dots, hyphens allowed
 * - `'password'` — Minimum 8 characters; must include at least one lowercase, one uppercase, one number, and one special character (!@#$%^&*)
 * - `'email'` — Must match standard email format (something@domain.tld)
 * - `'phone'` — 7–15 digits; optional leading plus (+) for country code
 * - `'url'` — Valid HTTP/HTTPS URL format
 * - `'uuid'` — Valid UUID format (v1-v5)
 * - `'ipv4'` — Valid IPv4 address (0.0.0.0 to 255.255.255.255)
 * - `'ipv6'` — Valid IPv6 address
 * - `'date'` — ISO 8601 date format (YYYY-MM-DD)
 * - `'hexcolor'` — Hex color code (#RGB or #RRGGBB, with or without #)
 *
 * @param {ValidationType} type - The kind of input to validate.
 * @param {string} input - The value to test against the validation rules.
 * @returns {boolean} Returns `true` if the input passes the validation, otherwise `false`.
 *
 * @throws {Error} Throws if an invalid type is provided.
 *
 * @example
 * validate('email', 'user@example.com'); // true
 * validate('username', 'John_Doe'); // true
 * validate('password', 'Passw0rd!'); // true
 * validate('phone', '+1234567890'); // true
 * validate('url', 'https://example.com'); // true
 * validate('uuid', '123e4567-e89b-12d3-a456-426614174000'); // true
 * validate('ipv4', '192.168.1.1'); // true
 * validate('ipv6', '2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // true
 * validate('date', '2026-01-16'); // true
 * validate('hexcolor', '#FF5733'); // true
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
        case 'url':
            return urlRegex.test(input);
        case 'uuid':
            return uuidRegex.test(input);
        case 'ipv4':
            return ipv4Regex.test(input);
        case 'ipv6':
            return ipv6Regex.test(input);
        case 'date':
            return dateISORegex.test(input);
        case 'hexcolor':
            return hexColorRegex.test(input);
        default:
            throw new TypeError('Invalid validation type');
    }
}