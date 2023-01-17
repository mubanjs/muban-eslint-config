/* eslint-disable @typescript-eslint/naming-convention */

// error in naming
const Foo = 'fake-component';

// error in naming
function Bar (baz: unknown): void {
  // eslint-disable-next-line no-console
  console.log(baz);
}

Bar(Foo);

// okay
export const Baz = 'fake-component';