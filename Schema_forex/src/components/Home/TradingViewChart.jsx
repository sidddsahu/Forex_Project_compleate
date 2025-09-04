import React, { useEffect } from "react";

export default function TradingViewTicker() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
      ],
      showSymbolLogo: true,
      colorTheme: "dark", // or "light"
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en"
    });

    document.getElementById("tradingview-ticker").appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <div id="tradingview-ticker" className="w-full" />
    </div>
  );
}
