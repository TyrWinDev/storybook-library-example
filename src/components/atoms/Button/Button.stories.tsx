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

export const  Solid: Story = {
    args: {
        variant: "solid",
        children: "Click me",
    }
}

export const Outline: Story ={
    args: {
        variant: "outline",
        children: "Click me",
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Click me",
    }
}