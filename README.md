# Angular Login and SignUp Route Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Prerequisites

Make sure you have the following packages installed before running the project:

- @angular/core
- @angular/forms
- @angular/router
- @angular/platform-browser

## Installation

1. Clone this repository to your local machine or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server and run the application, use the following command:

```bash
ng serve
```

Once the server is running, you can access the application in your web browser at [http://localhost:4200/](http://localhost:4200/).

The application has the following routing details:

- Login page: [http://localhost:4200/login](http://localhost:4200/login)
- Signup page: [http://localhost:4200/signup](http://localhost:4200/signup)
- Homepage: [http://localhost:4200/](http://localhost:4200/)

The homepage contains buttons to navigate to the login and signup pages, along with other content.

## Backend Integration

Currently, this project does not have a backend application. It only provides a basic login page that displays a "Login Successful" message if a username and password (at least 8 characters) are entered.

To integrate with a backend server, you can modify the project code to send requests to an API endpoint for authentication and user management.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a GitHub issue or submit a pull request.

## License

This project is licensed under the [GPL-3.0 License](LICENSE).
