import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Cores',
  decorators: [withDesign],
};

const TemplateCores = () => {
  return `<div>Para visualizar clina na aba Design abaixo</div>`;
};

export const Cores = TemplateCores.bind({});
Cores.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=308%3A120',
  },
}
