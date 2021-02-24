import { newSpecPage } from '@stencil/core/testing';
import { MedModal } from '../modal';

describe('med-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedModal],
      html: `<med-modal></med-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <med-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-modal>
    `);
  });
});
