import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal }  from '../components/modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const miModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
miModal.args = {
 titulo:'7mo Modulo',
 descripcion: 'Este modulo vimos las bases de React',
 estudiante: 'Romer Ariel Romero Isnado'
};

