const formatData = (data: any, dataType: "date") => {
  const _data = data;

  switch (dataType) {
    case "date":
      const [year, month, day] = _data.replace(/T[^Z]*Z/g, "").split("-") as [string, string, string];
      return { year, month, day };
  }
};

export default formatData;
