import FilterButton from "./FilterButton";

const Manual = () => {
  return (
    // Manual for the user to understand what's going on.
    <div>
      <article
        style={{
          display: "-webkit-inline-box",
          fontSize: "24px",
          marginTop: "24px",
        }}
      >
        <p style={{ margin: 0, paddingRight: "12px" }}>
          So, basically you can use the
        </p>
        <FilterButton />{" "}
        <p style={{ margin: 0, paddingLeft: "12px" }}>
          {" "}
          to filter the columns.
        </p>
      </article>
      <p>
        <br />
        You can also edit the Table's cells,
        <br /> and add rows & columns using the "data.json"
      </p>
    </div>
  );
};

export default Manual;
