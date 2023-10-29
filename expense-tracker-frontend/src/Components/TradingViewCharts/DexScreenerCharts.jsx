// DexScreenerChart.js
import React from 'react';
import styled from 'styled-components';

const DexScreenerChartStyled = styled.div`
    height: 100%;
    width: 100%;
    iframe {
        
        height: 100%;
        width: 100%;
    }
`;

const DexScreenerChart = ({ pair = "ETH_USDT", exchange = "uniswap" }) => {
    const url = `https://dexscreener.com/watchlist`;

    return (
        <DexScreenerChartStyled>
            <iframe
                src={url}
                
            ></iframe>
        </DexScreenerChartStyled>
    );
};

export default DexScreenerChart;
