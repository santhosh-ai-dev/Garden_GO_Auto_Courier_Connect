async function getProductAvailabilty() {
    const chartType = "bar";
    const url = `http://127.0.0.1:5000/get_chart_data?chart_type=${chartType}`;
    const response = await fetch(url);
    const data = await response.json();
    new Chart("productAvailability", {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [{
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                data: data.data
            }]
        },
        options: {
            title: {
                display: true,
                text: "Product Availability (Count)"
            }
        }
    });
    this.getTotalProductsSold();
}


async function getTotalProductsSold() {
    const chartType = "doughnut";
    const url = `http://127.0.0.1:5000/get_chart_data?chart_type=${chartType}`;
    const response = await fetch(url);
    const data = await response.json();
    new Chart("totalProductsSold", {
        type: "doughnut",
        data: {
            labels: data.labels,
            datasets: [{
                backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
                data: data.data
            }]
        },
        options: {
            title: {
                display: true,
                text: "Total Products Sold by Category"
            }
        }
    });
    this.profitChart();
}


async function profitChart() {
    const chartType = "line";
    const url = `http://127.0.0.1:5000/get_chart_data?chart_type=${chartType}`;
    const response = await fetch(url);
    const data = await response.json();
    new Chart("profitChart", {
        type: "line",
        data: {
            labels: data.labels,
            datasets: [{
                label: "Profit",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                data: data.data,
                fill: true
            }]
        },
        options: {
            title: {
                display: true,
                text: "Profit Over Periods"
            }
        }
    });

    this.salesPerformance();
}

async function salesPerformance() {
    const chartType = "bar";
    const url = `http://127.0.0.1:5000/get_chart_data?chart_type=${chartType}`;
    const response = await fetch(url);
    const data = await response.json();
    new Chart("salesPerformance", {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [{
                label: "Total Sales",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                data: data.data,            
            }]
        },
        options: {
            title: {
                display: true,
                text: "Sales Performance Over Periods"
            }
        }
    });
}


    getProductAvailabilty();
    getTotalProductsSold();
    profitChart();
    salesPerformance();
