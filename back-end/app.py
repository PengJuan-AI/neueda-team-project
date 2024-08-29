from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/fetch-data')
def fetch_data():
    # Your existing Python logic to fetch data from CoinAPI
    api_key = '9B8E1B2D-050F-415E-B5BA-A323713E98E6'
    lst_asset_id = ['BTC', 'ETH', 'BNB', 'SOL', 'USDC', 'XRP', 'TON', 'CREAM', 'TRB', 'DCR']
    asset_id_quote = 'USD'
    start_date = '2024-06-01T00:00:00'
    end_date = '2024-08-31T00:00:00'
    time_period = '1DAY'
    all_data = []

    for asset_id_base in lst_asset_id:
        url = f'https://rest.coinapi.io/v1/exchangerate/{asset_id_base}/{asset_id_quote}/history?period_id={time_period}&time_start={start_date}&time_end={end_date}'
        headers = {'X-CoinAPI-Key': api_key}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            for record in data:
                selected_data = {
                    'asset_id': asset_id_base,
                    'time_close': record['time_close'],
                    'rate_close': record['rate_close']
                }
                all_data.append(selected_data)
        else:
            return jsonify({'error': f"Failed to fetch data for {asset_id_base}"}), 400

    return jsonify(all_data)

if __name__ == '__main__':
    app.run(debug=True)
