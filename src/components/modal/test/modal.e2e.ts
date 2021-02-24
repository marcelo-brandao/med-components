import { newE2EPage } from '@stencil/core/testing';

describe('med-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-modal></med-modal>');

    const element = await page.find('med-modal');
    expect(element).toHaveClass('hydrated');
  });
});
