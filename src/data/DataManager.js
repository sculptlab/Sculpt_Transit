const BUS_STOP_DATA = "bus_stops.json";
const STOP_WISE_DEMAND = "stop_wise_demand.json";
const ZONAL_DEMAND = "daily_zonal_demand.json";

export async function loadData(FILE) {
  const data = await import(`src/data/${FILE}`);
  return data.default; // Assuming the JSON file uses ES modules
}

export const extractBusStopsData = async () => {
  try {
    const data = await loadData(BUS_STOP_DATA);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${BUS_STOP_DATA}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};

export const extractStopWiseDemand = async () => {
  try {
    const data = await loadData(STOP_WISE_DEMAND);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${STOP_WISE_DEMAND}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};

export const extractZoneWiseDemand = async () => {
  try {
    const data = await loadData(ZONAL_DEMAND);
    console.log("data is", data);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${ZONAL_DEMAND}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};
