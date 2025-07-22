import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {control: 'inline-radio'},
        fontColor: {control: 'color'}
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label: 'xxaa',
    }
};

export const AllCaps: Story = {
    args:{
        label: 'AllCaps',
        allCaps: true,
    }
};

export const Secondary: Story = {
    args:{
        label: 'Secondary',
        color: 'text-secondary',
    }
};

export const CustomColor: Story = {
    args:{
        label: 'CustomColorx',
        fontColor: '#DDD',
    }
};

export const BackgroundColor: Story = {
    args:{
        label: 'BackgroundColor',
        size: 'h2',
        fontColor: '#FF99',
        backgroundColor: 'green',
    }
};