// TradingViewCharts.js
import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { InnerLayout } from '../../styles/Layout';

const TradingViewCharts = () => {
  const containerRef = useRef();

  useEffect(() => {
    
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://s3.tradingview.com/tv.js';
    scriptElement.async = true;
    scriptElement.onload = () => {
      // eslint-disable-next-line no-new
      new window.TradingView.widget({
        container_id: containerRef.current.id,

        symbol: 'BITSTAMP:BTCUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'Light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_legend: false,
        save_image: false,
        withdateranges: true,
        hideideas: true,
      });
    };
    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  


  return (
    <InnerLayout>
   <TradingViewChartsStyled>
    <h1>Browse Charts </h1>
  <div id="bitcoin-chart-container" ref={containerRef}></div>
  </TradingViewChartsStyled>
  </InnerLayout>
  );
  
};

const TradingViewChartsStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#bitcoin-chart-container{
    border: 4px solid darkblue;
    border-radius: 0.5%;
}


h1{
    margin-bottom: 40px;
}


`;


export default TradingViewCharts;
