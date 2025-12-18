# PSGUtil

PSGUtil is a utility library designed to simplify common validation tasks and logging operations for Express. It provides regex-based validation for various input types and customizable logging functions.

## Project Structure

### Key Modules

- **[`src/logger.js`]**: Contains logging utilities for color-coded and error-specific logs.
- **[`src/regex.js`]**: Defines reusable regular expressions for validating inputs like emails, passwords, phone numbers, and usernames.
- **[`src/validate.js`]**: Implements validation functions for input arrays, field counts, and required fields.
- **[`src/colors.js`]**: Defines ANSI console colors.

## Features

### Validation Utilities

- **Regex-based Validation**:
  - [`validate`]: A function that validates E-mail, Password, Username and Phone Number type user inputs. Parameters for using the function: validate(type, input).
  Avaliable types: "email", "password", "username", "phone"

- **Validation Functions**:
  - [`validateFieldCount`]: Ensures the correct number of fields are provided. Parameter: Desired number of fields
  - [`validateInputArray`]: Validates if input data is array. Parameter: Array of desired fields
  - [`validateRequiredFields`]: Checks for the presence of required fields. Parameter: Array of desired fields

### Logging Utilities

- [`colorLog`]: Logs messages with customizable colors. Use it with app.use()
- [`errorLog`]: Logs error messages in a standardized format. Use it with app.use()

### Installation

Install from npm:

```sh
npm install psgutil