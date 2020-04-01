const { create } = require('@storybook/theming/create');

module.exports = [
    {
        name : 'LIGHT',

        primaryColour : '#0C5AFF',
        secondaryColour : '',
        // App
        backgroundColour : '#F7F7F7',

        // Content
        contentBackground : '#FDFFFE',
        menuBackground : '#E7EBEE',

        textColour : '#000',
        textColourDim : '#00000080',
        textColourInverse : '#fff',

        iconColour : '#0fb2ab',
        activeIconColour : '#0fb2ab',

        borderColour : '#00000033'
    },
    {
        name : 'DIM',
        
        primaryColour : '#2C2C52',
        secondaryColour : '#09203b',
        // App
        backgroundColour : '#1C1E2F',

        // Content
        contentBackground : '#151625',
        menuBackground : '#161726',

        textColour : '#fff',
        textColourDim : '#ffffff80',
        textColourInverse : '#000',

        iconColour : '#787893',
        activeIconColour : '#0fb2ab'
    }
    // {
    //     name : 'DARK'
    // }
];