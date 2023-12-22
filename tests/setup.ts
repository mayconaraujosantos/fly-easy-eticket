// this is an example
global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
} as unknown as Console;
