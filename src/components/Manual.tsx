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
      <a
        target="_blank"
        href="https://github.com/itaim18/Table-Assignment"
        style={{ color: "black" }}
      >
        <img
          src="gh.svg"
          style={{
            stroke: "white",
            paddingLeft: "8px",
            paddingTop: "8px",
            width: "42px",
          }}
        />
      </a>
    </div>
  );
};

export default Manual;
