/* DEFINE CONSTANTS */

// identify canvas
const canvas = d3.select("#warming-stripes");
const svg = canvas.append("svg")
        .attr("width", 1000)
        .attr("height", 1000);

// define range of colors from dark blue to light blue (top row) 
// and orange/light red to dark red
// colors are adapted from single hue range found at https://colorbrewer2.org/
const barColors = ["#023858", "#035a8d", "#0570b0", "#3690c0", "#73a9cf", "#a6bddb", "#d0d1e6", "#ece7f2","#fff7fb",
                    "#fff7ec", "#fee8c8", "#fdd39e", "#fc8d59","#ef6558", "#d7301f", "#b30000", "#7f0000"];

// call function to draw graph
readData("GLB.TT.csv", "#warming-stripes");
// readGraphData("GLB.TT.csv", "#warming-stripes");

/* DEFINE FUNCTIONS */

    // read CSV file
    function readData(file, id) {
        console.log("read data");
        d3.csv(file, processData)
            .then((data) => graph(data, id))
            .catch((error) => console.log("error: ", error.message));
    }

    // map CSV data by row
    function processData(d) {
        // console.log("processData routine");
        console.log(d);
        let dataRow = {
            year: parseFloat(d.Year) || 0.00,
            avg: parseFloat(d["J-D"]) || 0.00
        };
        return dataRow;
        // return d;
    }

    // create warming stripes graph(ic)
    function graph(data, id) {
        // console.log("graph routine");
        // console.log(id, data);
        let stripeWidth = 5;
        let stripeHeight = 300;

        // take in temp average data to determine domain and
        // create distributed range where color is mapped to even interval
        let avgData = data.map((d) => d.avg);
        let linearScaleForData = 
            d3.scaleLinear()
                .domain([d3.min(avgData), d3.max(avgData)])
                .range([0,barColors.length-1])
                ;

        // select the canvas and svg element
        let canvas = d3.select(id);
        let svg = canvas.select("svg")
            .attr("width", data.length * stripeWidth)
            .attr("height", stripeHeight)
            ;

        // create warming stripes
        let stripes =         
            svg.selectAll("rect")
                .data(data)
                .enter()
                    .append("rect")
                    .attr("width", stripeWidth)
                    .attr("height", stripeHeight)
                    .attr("x", (d, i) => i * stripeWidth)
                    .attr("y", 0)
                    .style("fill", (d, i) => barColors[Math.round(linearScaleForData(d.avg))])
    }

