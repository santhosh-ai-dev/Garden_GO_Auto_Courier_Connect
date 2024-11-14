from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data for different charts
sample_data = {
    "line": {
        "labels": ["January", "February", "March", "April", "May"],
        "data": [65, 59, 80, 81, 56]
    },
    "bar": {
        "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        "data": [12, 19, 3, 5, 2, 3]
    },
    "pie": {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    },
    "doughnut": {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [120, 90, 140]
    }
}

@app.route('/get_chart_data', methods=['GET'])
def get_chart_data():
    # Retrieve query parameters
    chart_type = request.args.get('chart_type')
    labels_param = request.args.get('labels')
    data_param = request.args.get('data')
    
        
    labels = labels_param.split(",") if labels_param else sample_data[chart_type]["labels"]
    data = list(map(int, data_param.split(","))) if data_param else sample_data[chart_type]["data"]
    
    if chart_type not in sample_data:
        return jsonify({"error": "Invalid chart type"}), 400
    
    
    response_data = {
        "type": chart_type,
        "labels": labels,
        "data": data
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
