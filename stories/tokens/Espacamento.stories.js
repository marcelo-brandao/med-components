import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Espacamento',
  decorators: [withDesign],
};

const TemplateEspacamento = () => {
  return `<h1 style="font-family: sans-serif; text-align: center;">⚠️ Para visualizar clique na aba <span style="color: #3a8bd8;">Design</span> abaixo!</h1>`;
};

export const Espacamento = TemplateEspacamento.bind({});
Espacamento.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=563%3A472',
  },
}
