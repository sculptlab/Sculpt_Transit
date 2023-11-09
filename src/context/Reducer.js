import {
  GET_BUS_STOPS,
  GET_STOP_WISE_DEMAND,
  GET_ZONE_WISE_DEMAND,
} from "./ActionTypes";

export const initialState = {
  bus_stops: [],
  stops_demand: {},
  zones_demand: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_BUS_STOPS:
      return { ...state, bus_stops: [...action.payload] };
    case GET_STOP_WISE_DEMAND:
      return { ...state, stops_demand: action.payload };
    case GET_ZONE_WISE_DEMAND:
      return { ...state, zones_demand: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
