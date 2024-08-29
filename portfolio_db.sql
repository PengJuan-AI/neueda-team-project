-- Use the created database
CREATE DATABASE portfolio_db;

-- Create the 'Stock' table
USE portfolio_db;

-- Create the 'Crypto' table
CREATE TABLE Crypto (
    id INT AUTO_INCREMENT,
    symbol VARCHAR(100) PRIMARY KEY,
    corp VARCHAR(100),
    price FLOAT,
    quantity FLOAT, -- Change this to FLOAT to allow decimal values
    change_percent FLOAT
);

-- Create the 'Stock' table
CREATE TABLE Stock (
    id INT AUTO_INCREMENT,
    symbol VARCHAR(100) PRIMARY KEY,
    corp VARCHAR(100),
    price FLOAT,
    quantity INT,
    change_percent FLOAT
);

-- Corrected INSERT INTO statements
INSERT INTO crypto (symbol, corp, price, quantity, change_percent)
VALUES 
('BTC-USD', 'Bitcoin USD', 60383.93, 1, 0.29),
('ETH-USD', 'Ethereum USD', 2673.99, 1, 0.29),
('BNB-USD', 'BNB USD', 579.89, 1, 1.33), -- Changed quantity to integer
('SOL-USD', 'Solana USD', 145.15, 1, 1.96), -- Corrected symbol to SOL-USD and fixed quantity
('USDC-USD', 'USD Coin USD', 1.0000, 1, 0.0016), -- Added missing quantity value
('XRP-USD', 'XRP USD', 0.598900, 1, -0.2403), -- Added missing quantity value
('TON-USD', 'Toncloin USD', 6.5800, 1, 1.280), -- Fixed quantity to 1
('CREAM-USD', 'Cream USD', 20.912, 1, 1.280), -- Fixed quantity to 1
('TRB-USD', 'Tellor USD', 57.328, 1, 0.409); -- Fixed quantity to 1
('DCR-USD', 'Decred USD', 11.491, 1, 1.435800); -- Fixed quantity to 1

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
