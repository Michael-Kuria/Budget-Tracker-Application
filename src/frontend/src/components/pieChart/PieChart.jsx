import { ResponsivePie } from "@nivo/pie";
// import { Paper } from "@mui/material";
// import data from "../../data/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = ({ data }) => (
  <ResponsivePie
    theme={{
      fontFamily: "inherit",
      textColor: "#1a1a1a",
      fontSize: ".8rem",
    }}
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "nivo" }}
    borderWidth={2}
    borderColor={{
      from: "color",
      modifiers: [["darker", "0.2"]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#1a1a1a"
    arcLinkLabelsThickness={4}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    // fill={[
    //   {
    //     match: {
    //       id: "Clothing",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "Debt",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "Food",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "Household_Supplies",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "Housing",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "Medical",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "Personal",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "Transportation",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "Utilities",
    //     },
    //     id: "lines",
    //   },
    // ]}
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default PieChart;
