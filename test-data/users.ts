export interface LoginCase {
  username: string;
  password: string;
  expectedUrl?: string;
  expectedError?: string;
}

export const loginCases: LoginCase[] = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expectedUrl: 'https://www.saucedemo.com/inventory.html',
  },
    {
    username: 'problem_user',
    password: 'secret_sauce',
    expectedUrl: 'https://www.saucedemo.com/inventory.html',
  },
    {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
    expectedUrl: 'https://www.saucedemo.com/inventory.html',
  },
    {
    username: 'error_user',
    password: 'secret_sauce',
    expectedUrl: 'https://www.saucedemo.com/inventory.html',
  },
    {
    username: 'visual_user',
    password: 'secret_sauce',
    expectedUrl: 'https://www.saucedemo.com/inventory.html',
  },
     {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  }
];