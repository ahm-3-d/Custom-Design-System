const Styles = {
    menu: (provided, state) => ({
        ...provided,
        background : state.selectProps.theme.backgroundColour,
        color : state.selectProps.theme.textColour
    }),
    container: (provided, state) => ({
        ...provided,
        color : state.selectProps.theme.textColour,
        borderBottom : '1px solid' + state.selectProps.theme.primaryColour,
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5
    }),
    control: (provided, state) => ({
        ...provided,
        color : state.selectProps.theme.textColourInverse,
        background : state.selectProps.theme.backgroundColour,
        border : 'none',
        textIndent : state.selectProps.components.Control && 15
    }),
    // input : (provided, state) => ({
    //     ...provided,
    //     color : state.selectProps.theme.textColour
    // }),
    option: (provided, state) => ({
        ...provided,
        '&:hover' : {
            cursor: 'pointer',
            background : state.selectProps.theme.primaryColour
        }
    }),
    indicatorSeparator : (provided, state) => ({
        ...provided,
        background : state.selectProps.theme.primaryColour
    }),
    dropdownIndicator : (provided, state) => ({
        ...provided,
        color : state.selectProps.theme.primaryColour
    }),
};

export default Styles;