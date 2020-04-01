import React from "react";

import {
    StyledListItem, 
    Left, 
    StyledListItemTitle, 
    StyledListItemDescription, 
    Right, 
    StyledList,
    NoImage
} from "./List.styles";

export function ListItem({ img, title, description, footer, style, children, ...rest}) {
    return (
        <StyledListItem style={{ ...style }} {...rest}>
            <Left>
                {img ? (<img src={img} style={{ marginRight : '1em'}}/> ) : <NoImage /> }

                <div style={{ marginLeft : '1em'}}>
                    <StyledListItemTitle>
                        {title} &nbsp;
                    </StyledListItemTitle>
                    <StyledListItemDescription>{description}</StyledListItemDescription>
                </div>
            </Left>

            <Right>{footer}</Right>
            {children}
        </StyledListItem>
    )
};

function List({ children, style, ...rest}) {
    return <StyledList style={{ ...style }}>{children}</StyledList>
};

export default List;