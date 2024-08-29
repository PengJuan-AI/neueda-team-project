-- Use the created database
CREATE DATABASE portfolio_db;

-- Create the 'Stock' table
USE portfolio_db;

-- Create the 'Crypto' table
CREATE TABLE Crypto (
    symbol VARCHAR(100) PRIMARY KEY,
    corp VARCHAR(100),
    price FLOAT,
    quantity FLOAT, -- Change this to FLOAT to allow decimal values
    change_percent FLOAT
);

-- Corrected INSERT INTO statements
INSERT INTO crypto (symbol, corp, price, quantity, change_percent)
VALUES 
-- ('BTC-USD', 'Bitcoin USD', 60383.93, 1, 0.29)
-- ('ETH-USD', 'Ethereum USD', 2673.99, 1, 0.29),
('BNB-USD', 'BNB USD', 579.89, 1, 1.33), -- Changed quantity to integer
('SOL-USD', 'Solana USD', 145.15, 1, 1.96), -- Corrected symbol to SOL-USD and fixed quantity
-- ('USDC-USD', 'USD Coin USD', 1.0000, 1, 0.0016), -- Added missing quantity value
-- ('XRP-USD', 'XRP USD', 0.598900, 1, -0.2403), -- Added missing quantity value
('TON-USD', 'Toncloin USD', 6.5800, 1, 1.280), -- Fixed quantity to 1
('CREAM-USD', 'Cream USD', 20.912, 1, 1.280), -- Fixed quantity to 1
('TRB-USD', 'Tellor USD', 57.328, 1, 0.409), -- Fixed quantity to 1
('DCR-USD', 'Decred USD', 11.491, 1, 1.435800); -- Fixed quantity to 1

-- Create the 'Stock' table
CREATE TABLE Stock (
    stockExchange VARCHAR(100),
    sector VARCHAR(100),
    symbol VARCHAR(100) PRIMARY KEY,
    corp VARCHAR(100),
    currency VARCHAR(100),
    price FLOAT,
    change_percent VARCHAR(100),
    quantity INT
);

-- Insert sample data into the 'Stock' table
INSERT INTO Stock (stockExchange, sector, symbol, corp, currency, price, change_percent, quantity)
VALUES 
('SSE', 'Consumer Staples', '600519', '贵州茅台', 'CNY' ,1389.00, '-1.0733%', 1),
('SSE', 'Energy', '601857', '中国石油', 'CNY', 9.18, '-1.5021%' ,1),
('SZSE', 'Healthcare', '300760', '迈瑞医疗', 'CNY', 226.52, '-3.8785%', 1),
('SZSE', 'Consumer Discretionary', '002594', '比亚迪', 'CNY', 236.85, '-1.6404%', 1),
('NYSE', 'Technology', 'AAPL', 'Apple Inc.', 'USD', 232.03, '2.4466%', 1),
('NASDAQ', 'Consumer Discretionary', 'AMZN', 'Amazon.com, Inc.', 'USD', 174.19, '1.9825%', 1),
('NASDAQ', 'Technology/Semiconductors', 'NVDA', 'NVIDIA Corporation', 'USD', 121.52, '-3.2584%', 1),
('NASDAQ', 'Consumer Discretionary/Automobiles','TSLA', 'Tesla, Inc.', 'USD', 211.33, '2.7114%', 1),
('LSE', 'Consumer Goods', 'ULVR.L', 'Unilever PLC', 'GBP', 4867.00, '0.5371%', 1),
('LSE', 'Financials/Banking','HSBA.L', 'HSBC Holdings PLC', 'GBP', 659.70, '-0.1816%', 1);
