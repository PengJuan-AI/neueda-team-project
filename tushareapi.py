import tushare as ts

#设置你的token，登录tushare在个人用户中心里拷贝
ts.set_token('1a539bf6dd091c4e6730b19be42fdb6a47b5307167a19f8124f9651d')

#sina数据
df = ts.realtime_quote(ts_code='600000.SH,000001.SZ,000001.SH')
print(df)