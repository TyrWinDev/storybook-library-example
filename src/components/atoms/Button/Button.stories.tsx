import type {Meta, StoryObj} from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: "Components/atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["atoms", "button", "autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Click me",
        
    }
}