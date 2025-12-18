export const usernameRegex = /^[a-zA-Z0-9_.-]{3,20}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?[0-9]{7,15}$/;

/**
 * Type of input to validate.
 * @typedef {'username' | 'password' | 'email' | 'phone'} ValidationType
 */

/**
 * Validation rules for each type:
 * - **username**: Must start with a letter, can contain letters, numbers, underscores, 3-16 characters.
 * - **password**: At least 8 characters, must include uppercase, lowercase, and a number.
 * - **email**: Valid email format (e.g., user@example.com).
 * - **phone**: Valid phone number (digits, optional country code, e.g., +1234567890).
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
 * validate('password', '123'); // false
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