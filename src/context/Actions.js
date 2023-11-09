import {
  extractBusStopsData,
  extractStopWiseDemand,
  extractZoneWiseDemand,
} from "@/data/DataManager";
import {
  GET_BUS_STOPS,
  GET_STOP_WISE_DEMAND,
  GET_ZONE_WISE_DEMAND,
} from "./ActionTypes";

export const getBusStopsData = async (dispatch) => {
  try {
    const data = await extractBusStopsData();
    if (dispatch)
      dispatch({
        type: GET_BUS_STOPS,
        payload: data?.stops,
      });
    return data;
  } catch (error) {
    console.error(`An error occurred while loading BUS_STOP_DATA`, error);
    throw error;
  }
};

export const getStopWiseDemand = async (dispatch) => {
  try {
    const data = await extractStopWiseDemand();
    if (dispatch)
      dispatch({
        type: GET_STOP_WISE_DEMAND,
        payload: data,
      });
    return data;
  } catch (error) {
    console.error(`An error occurred while loading STOP_WISE_DEMAND`, error);
    throw error;
  }
};

export const getZoneWiseDemand = async (dispatch) => {
  try {
    const data = await extractZoneWiseDemand();
    if (dispatch)
      dispatch({
        type: GET_ZONE_WISE_DEMAND,
        payload: data?.zones,
      });
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ZONAL_DEMAND`, error);
    throw error;
  }
};

