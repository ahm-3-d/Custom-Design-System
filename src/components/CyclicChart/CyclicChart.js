import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from "prop-types"
import {
    PieChart,
    Pie,
    Sector,
    Label
} from 'recharts';

const renderActiveShape = props => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        theme
    } = props

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius - 2}
                outerRadius={outerRadius + 2}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill || theme.primaryColour}
            />
        </g>
    )
};

function CyclicChart({  label, fill, data, theme, ...rest}) {
    const pieFill = [
        {
            name: 'a',
            value: 100 - data
        },
        {
            name: 'b',
            value: data
        }
    ];

    return (
        <PieChart width={200} height={200} {...rest}>
            <Pie
                activeIndex={1}
                activeShape={renderActiveShape}
                data={pieFill}
                dataKey="value"
                nameKey="name"
                innerRadius={48}
                outerRadius={50}
                fill={fill || theme.primaryColour}
                labelLine={false}
                strokeWidth={0}
            >
                {label && <Label value={label} position="center" fill={theme.textColour} stroke={theme.textColour} strokeOpacity={0.3} />}
            </Pie>
        </PieChart>
    )
};

CyclicChart.propTypes = {
    label : PropTypes.string,
    fill : PropTypes.string,
    data : PropTypes.number.isRequired
}

CyclicChart.defaultProps = {
    label : '',
    fill : '',
    data : []
};

export default withTheme(CyclicChart);