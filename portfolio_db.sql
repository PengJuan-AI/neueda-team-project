-- Use the created database
CREATE DATABASE portfolio_db;

-- Create the 'Stock' table
USE portfolio_db;

-- Create the 'Crypto' table
CREATE TABLE Crypto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(100) NOT NULL,
    corp VARCHAR(100),
    price FLOAT,
    quantity FLOAT, -- Change this to FLOAT to allow decimal values
    change_percent FLOAT
);

-- Create the 'Stock' table
CREATE TABLE Stock (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(100) NOT NULL,
    corp VARCHAR(100),
    price FLOAT,
    quantity INT,
    change_percent FLOAT
);

-- Corrected INSERT INTO statements
INSERT INTO crypto (symbol, corp, price, quantity, change_percent)
VALUES 
('BTC-USD', 'Bitcoin USD', 60938.57, 1, 0.29),
('ETH-USD', 'Ethereum USD', 2673.99, 1, 0.29),
('USDT-USD', 'Tether USD', 1.0002, 1, -0.0181), -- Added missing quantity value
('BNB-USD', 'BNB USD', 579.89, 1, 1.33), -- Changed quantity to integer
('SOL-USD', 'Solana USD', 145.15, 1, 1.96), -- Corrected symbol to SOL-USD and fixed quantity
('USDC-USD', 'USD Coin USD', 1.0000, 1, 0.0016), -- Added missing quantity value
('XRP-USD', 'XRP USD', 0.598900, 1, -0.2403), -- Added missing quantity value
('STETH-USD', 'Lido Staked ETH USD', 2675.91, 1, 54.79), -- Fixed quantity to 1
('TON11419-USD', 'Toncoin USD', 6.5800, 1, 1.280), -- Fixed quantity to 1
('DOGE-USD', 'Dogecoin USD', 0.107200, 1, 1.435800); -- Fixed quantity to 1

-- Insert sample data into the 'Stock' table
INSERT INTO Stock (symbol, corp, price, quantity, change_percent)
VALUES 
('NVDA', 'NVIDIA Corporation', 123.74, 1, -3.70),
('TSLA', 'Tesla, Inc.', 210.66, 1, -5.65),
('INTC', 'Intel Corporation', 20.10, 1, -6.12),
('AMD', 'Advanced Micro Devices, Inc.', 151.70, 1, -3.87),
('IQ', 'iQIYI, Inc.', 2.60, 1, -15.58),
('SNOW', 'Snowflake Inc.', 115.21, 1, -14.70),
('AAPL', 'Apple Inc.', 224.53, 1, 0.83),
('BILI','Bilibili Inc.', 12.96, 1, -7.56),
('AMZN', 'Amazon.com, Inc.', 176.13, 1, -2.21),
('JD','JD.com, Inc.', 26.64, 1, -1.41);