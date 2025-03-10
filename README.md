# Black Friday 📅

A lightweight, dependency-free JavaScript utility to calculate Thanksgiving, Black Friday, and Cyber Monday dates for a given year.

## Installation

You can install this package via npm:

```sh
npm install black-friday
```

or using yarn:

```sh
yarn add black-friday
```

## Usage

Import the functions and use them to get the respective holiday dates:

```javascript
import { thanksgiving, blackFriday, cyberMonday } from 'black-friday';

console.log(thanksgiving()); // Returns the date of Thanksgiving for the current year
console.log(blackFriday()); // Returns the date of Black Friday for the current year
console.log(cyberMonday()); // Returns the date of Cyber Monday for the current year

console.log(thanksgiving(2026)); // Returns Thanksgiving date for 2026
console.log(blackFriday(2026)); // Returns Black Friday date for 2026
console.log(cyberMonday(2026)); // Returns Cyber Monday date for 2026
```

Want to know how many days are left until the next shopping event?

```typescript
import { daysUntilThanksgiving, daysUntilBlackFriday, daysUntilCyberMonday } from 'black-friday';

console.log(daysUntilThanksgiving()); // Days until Thanksgiving this year
console.log(daysUntilBlackFriday()); // Days until Black Friday
console.log(daysUntilCyberMonday()); // Days until Cyber Monday
```

## API

### `thanksgiving(year?: number): Date`

Returns the date of Thanksgiving (fourth Thursday of November) for the given year. Defaults to the current year if no year is provided.

### `blackFriday(year?: number): Date`

Returns the date of Black Friday (the day after Thanksgiving) for the given year. Defaults to the current year if no year is provided.

### `cyberMonday(year?: number): Date`

Returns the date of Cyber Monday (the Monday after Thanksgiving) for the given year. Defaults to the current year if no year is provided.

### `daysUntilThanksgiving(year?: number): number`

Returns the number of days remaining until Thanksgiving Day for the given year. Defaults to the current year if no year is provided.

### `daysUntilBlackFriday(year?: number): number`

Returns the number of days remaining until Black Friday for the given year. Defaults to the current year if no year is provided.

### `daysUntilCyberMonday(year?: number): number`

Returns the number of days remaining until Cyber Monday for the given year. Defaults to the current year if no year is provided.

## Features

- No dependencies
- Simple and efficient
- Works in both Node.js and browser environments
