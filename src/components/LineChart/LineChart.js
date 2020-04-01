import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid
} from "recharts";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ZoomButtonsContainer = styled.div`
    position : relative;
    z-index : 5;
    margin-top: -70px;
    margin-left: 70px;
`;

const Icon = styled(FontAwesomeIcon)`
    display : block;
    margin-bottom : 5px;
    border-radius : 50%;
    padding: 5px;
    background : ${props => props.theme.contentBackground};
    color : ${props => props.theme.textColour};
    font-size: 11px;

    :hover {
        cursor : pointer;
        opacity: 0.5;
    };
`;

function formatData(data) {
    return data.map(point => {
        return { ...point, pv: point.uv > 100 ? point.uv - 100 : 0 }
    })
};

const ZoomButtons = ({ onZoomDecrease, onZoomIncrease}) => (
    <ZoomButtonsContainer>
        <Icon icon="plus" onClick={onZoomIncrease} />
        <Icon icon="minus" onClick={onZoomDecrease}/>
    </ZoomButtonsContainer>
);

function LineChart(props) {
    const { 
        width, 
        height, 
        data, 
        dataKey, 
        showGhostLine, 
        zoom,
        onZoomDecrease,
        onZoomIncrease,
        ...rest 
    } = props;

    const areaDataKey = Object.keys(data[0])[1];

    return (
        <div style={{ width, height }}>
            <AreaChart
                width={width}
                height={height}
                data={showGhostLine ? formatData(data) : data}
                {...rest}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#70C380" stopOpacity={1} />
                        <stop offset="95%" stopColor="#70C380" stopOpacity={0.2} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" horizontal={false} strokeOpacity={0.05} strokeWidth={1} />
                <XAxis
                    dataKey={dataKey}
                    orientation="top"
                    axisLine={false}
                    tick={{
                        fontSize: 14,
                        fill: '#91A1B0',
                        marginBottom: 10
                    }}
                    dy={-10}
                    padding={{ left: 50, right: 50 }}
                    tickSize={0}
                />

                <Area type="monotone" dataKey={areaDataKey} stroke="#70C380" fill="url(#colorUv)" strokeWidth={3} animationDuration={5000} />
                <Area type="monotone" dataKey="pv" stroke="#70C380" fill="none" strokeWidth={3} strokeOpacity={0.1} animationDuration={2000}/>
            </AreaChart>
            {zoom && <ZoomButtons />}
        </div>

    )
};

LineChart.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired,
    zoom : PropTypes.bool,
    onZoomIncrease : PropTypes.func,
    onZoomDecrease : PropTypes.func,
    showGhostLine: PropTypes.bool
}

export default LineChart;