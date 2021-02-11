import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Cores',
  decorators: [withDesign],
};

const TemplateCores = () => {
  return `<h1 style="font-family: sans-serif; text-align: center;">⚠️ Para visualizar clique na aba <span style="color: #3a8bd8;">Design</span> abaixo!</h1>`;
};

export const Cores = TemplateCores.bind({});
Cores.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=308%3A120',
  },
}
