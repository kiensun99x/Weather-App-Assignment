export default function convertWindDirection(direction) {
    const windDirections = {
        "N": "Bắc",
        "NNE": "Bắc Đông Bắc",
        "NE": "Đông Bắc",
        "ENE": "Đông Đông Bắc",
        "E": "Đông",
        "ESE": "Đông Đông Nam",
        "SE": "Đông Nam",
        "SSE": "Nam Đông Nam",
        "S": "Nam",
        "SSW": "Nam Tây Nam",
        "SW": "Tây Nam",
        "WSW": "Tây Tây Nam",
        "W": "Tây",
        "WNW": "Tây Tây Bắc",
        "NW": "Tây Bắc",
        "NNW": "Bắc Tây Bắc"
    };

    return windDirections[direction] || "Không xác định";
}