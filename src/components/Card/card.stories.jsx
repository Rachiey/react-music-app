import React from 'react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'large' ]
        },
        artistName: {
            control: 'text'
        },
        musicType: {
            control: 'text'
        },
        intro: {
            control: 'text'
        }
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    artistName: 'ABBA',
    musicType: 'Pop',
    intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972.'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    title: 'A post awaits...',
    artistName: 'Queen ',
    musicType: 'Rock ',
    intro: 'Queen are a British rock band formed in London in 1970.'
}