import pandas as pd

# Load data
data = pd.read_csv('stock_data.csv')

# Calculate moving average
data['Moving_Average'] = data['Close'].rolling(window=20).mean()

# Display the result
print(data[['Date', 'Close', 'Moving_Average']])
