/* eslint-disable @typescript-eslint/naming-convention */

const Foo = 'fake-component';

function Bar (baz: unknown): void {
  // eslint-disable-next-line no-console
  console.log(baz);
}

Bar(Foo);

export const Baz = 'fake-component';