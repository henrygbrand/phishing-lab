from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
@app.route('/api/text', methods=['POST', 'PUT'])
def receive_text():
    text = request.data.decode('utf-8')
    print(text)
    return text

if __name__ == '__main__':
    app.run()
