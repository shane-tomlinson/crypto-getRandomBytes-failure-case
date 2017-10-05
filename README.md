# Reduced test case for crypto.getRandomBytes error

When Firefox 56+ is run with geckodriver, invoking crypto.getRandomBytes fails with:

> OperationError: The operation failed for an operation-specific reason

It only fails when run over an http or https connection, opening the file directly using `file:///` does not fail.

## Prerequisites
* Node 0.8.x
* Firefox 56.0 or 57.0b5

## Installation

1. git clone https://github.com/shane-tomlinson/crypto-getRandomBytes-failure-case.git
2. cd crypto-getRandomBytes-failure-case
3. npm install

## Running the test

Running the test requires 3 processes to be run:

1. geckodriver - I tested against 0.17, 0.18, and 0.19
2. the web server with the test case
3. the test runner.

The process I used:
1. In window 1, start geckodriver.
2. In window 2, go to the project directory and run `npm start` to start the HTTP server.
3. In window 3, go to the project directory and run `npm run test-remote`

Watch the geckodriver logs, they will say:

> OperationError: The operation failed for an operation-specific reason

To keep the browser open after the test fails, run the test with the `QUIT=false` environment variable:

> QUIT=false npm run test-remote

## Watching the test pass - open the file directly.

In step 3 above, run `npm run test-file`