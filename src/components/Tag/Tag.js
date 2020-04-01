import React, { useState, useRef } from "react";
import styled from "styled-components";

const StyledTag = styled.div`
    color : ${props => props.theme.textColour};
    font-size : 12px;
    background : ${props => props.theme.backgroundColour};
    border-radius : 3px;
    padding : 3px;
    margin-right : 1em;
`;

const Container = styled.div`
    display : flex;
`

function Tag({ color, children, closable, ...rest }) {
    return (
        <StyledTag color={color || null} {...rest}>
            {children}
        </StyledTag>
    )
};

function InputTag() {
    const inputRef = useRef(null);
    const [tags, setTags] = useState([ 'Prevent Default']);

    const removeTag = (i) => {
        let newTags = [...tags]
        newTags.splice(i, 1)
        setTags(newTags);
    };

    const onInputKeyDown = e => {
        let value = e.target.value;

        if (e.key === 'Enter' && value) {
            if (tags.find(tag => tag.toLowerCase() === value.toLowerCase())) return;

            setTags([...tags, value]);
            inputRef.current.value = null;
        };
    };

    return (
        <Container>
            {tags.map((tag, i) => (
                <Tag key={tag}>
                    {tag}
                </Tag>
            ))}
            <div>
                <input type="text" onKeyDown={onInputKeyDown} ref={inputRef} />
            </div>
            {/* <ul>
                {tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                        <button type="button" onClick={() => removeTag(i)}>x</button>
                    </li>
                ))}
                <li>
                    <input type="text" onKeyDown={onInputKeyDown} ref={inputRef} />
                </li>
            </ul> */}
        </Container>
    )
};

export default InputTag;



