# String Calculator TDD Project

A Test-Driven Development (TDD) project implementing a string calculator using Jest.

## Project Structure

```
incubyte/
├── src/
│   └── stringCalculator.js    # Main implementation
├── tests/
│   └── stringCalculator.test.js # Test suite
├── coverage/                  # Test coverage reports
├── package.json              # Project configuration
├── package-lock.json         # Dependency lock file
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

## Implementation

The string calculator currently supports:
- Empty string returns 0
- Single number returns its value

## Development

This project follows TDD principles:
1. Write a failing test
2. Write minimal code to make the test pass
3. Refactor if needed
4. Repeat

## Test Coverage

Test coverage reports are generated in the `coverage/` directory when running `npm run test:coverage`.
