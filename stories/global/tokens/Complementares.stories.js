import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Complementares',
  decorators: [withDesign],
};

const TemplateComplementares = () => {
  return `<div>Para visualizar clina na aba Design abaixo</div>`;
};

export const Complementares = TemplateComplementares.bind({});
Complementares.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=563%3A472',
  },
}
