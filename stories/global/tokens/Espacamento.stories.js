import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Espacamento',
  decorators: [withDesign],
};

const TemplateEspacamento = () => {
  return `<div>Para visualizar clina na aba Design abaixo</div>`;
};

export const Espacamento = TemplateEspacamento.bind({});
Espacamento.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=563%3A472',
  },
}
