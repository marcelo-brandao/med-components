import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Tipografia',
  decorators: [withDesign],
};

const TemplateTipografia = () => {
  return `<div>Para visualizar clina na aba Design abaixo</div>`;
};

export const Tipografia = TemplateTipografia.bind({});
Tipografia.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=309%3A92',
  },
}
