import { describe, expect, it } from 'vitest';

import { greet } from './index';

describe('greet function', () => {
  it('should return greeting with provided name', () => {
    const name = 'John';

    expect(greet(name)).toBe('Hello, John!');
  });
});
