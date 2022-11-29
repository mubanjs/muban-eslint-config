/* eslint-disable lit/attribute-value-entities,unicorn/template-indent */

function html(data: unknown): string {
  // eslint-disable-next-line no-console
  console.log(data);
  return '';
}
export function testTemplate(): unknown {
  return html`<sdf
  foo= "bar">
    Hello world
    
    
  </sdf>
  <x-foo attr=">"></x-foo>
  `;
}