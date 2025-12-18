export const usernameRegex = /^[a-zA-Z0-9_.-]{3,20}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?[0-9]{7,15}$/;

/**
 * 
 * @param {'username' | 'password' | 'email' | 'phone'} type Type of input to validate.
 * @param {string} input The value to test 
 * @returns {boolean} Returns `true` if the input passes the validation, otherwise `false`
 * 
 * @throws {TypeError} Throws if an invalid type is provided
 * 
 * @example
 * validate('email', 'user@example.com'); // true
 * validate('username', 'John#Doe'); // true
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