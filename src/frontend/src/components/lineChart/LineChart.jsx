import { Paper } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
// import data from "../../data/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = ({ data }) => (
  <Paper
    sx={{
      display: "flex",
      padding: "1rem",
      borderRadius: "1rem",
      height: " 100%",
      width: "100%",
      alignItems: "center",
      fontFamily: "inherit",
      justifyContent: "center",
    }}
  >
    <ResponsiveLine
      theme={{
        fontFamily: "inherit",
        textColor: "#1a1a1a",
        fontSize: ".8rem",
        axis: {
          domain: {
            line: {
              stroke: "#1a1a1a",
              strokeWidth: 2,
            },
          },
          legend: {
            text: {
              fontSize: ".9rem",
              textTransform: "Capitalize",
              fill: "#1a1a1a",
            },
          },
          ticks: {
            line: {
              stroke: "#1a1a1a",
              strokeWidth: 1,
            },
            text: {
              fontSize: ".8rem",
              fill: "#333333",
              textTransform: "capitalize",
            },
          },
        },
        grid: {
          line: {
            stroke: "#dddddd",
            strokeWidth: 1,
          },
        },
      }}
      data={data}
      margin={{ top: 10, right: 50, bottom: 80, left: 100 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Category",
        legendOffset: 50,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Amount",
        legendOffset: -80,
        legendPosition: "middle",
      }}
      colors={{ scheme: "accent" }}
      lineWidth={3}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
    />
  </Paper>
);

export default LineChart;
