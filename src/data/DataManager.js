const BUS_STOP_DATA = "bus_stops.json";
const STOP_WISE_DEMAND = "demand.json";

export async function loadData(FILE) {
  const data = await import(`src/data/${FILE}`);
  return data.default; // Assuming the JSON file uses ES modules
}

export const getBusStopsData = async () => {
  try {
    const data = await loadData(BUS_STOP_DATA);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${BUS_STOP_DATA}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};

export const getStopWiseDemand = async () => {
  try {
    const data = await loadData(STOP_WISE_DEMAND);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${BUS_STOP_DATA}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};
