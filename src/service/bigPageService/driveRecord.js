// 导入baseService
import { baseService } from '@/service/baseService';

const getWeatherApi = '/api/drivingDiary/weather';        // 获取天气信息
const getDayInfoApi = '/api/drivingDiary/vehicleInfo';	  // 当日信息
const getVehicleStatusApi = '/api/drivingDiary/vehicleStatus';	// 日历中的状态信息
const getDrivingInfoApi = '/api/drivingDiary/vehicleDrivingInfo';	// 车辆历史轨迹
const getDetailInfoApi = '/api/drivingDiary/drivingVehicleDrivingInfo';	// 下方表格具体信息

/* 获取天气信息 */
export const getWeather = (opt, fnSuccess, fnFail) => {
  baseService('get', getWeatherApi, fnSuccess, fnFail, opt);
};

/* 获取当日信息 */
export const getDayInfo = (opt, fnSuccess, fnFail) => {
  baseService('get', getDayInfoApi, fnSuccess, fnFail, opt);
};

/* 获取日历中的信息 */
export const getVehicleStatus = (opt, fnSuccess, fnFail) => {
  baseService('get', getVehicleStatusApi, fnSuccess, fnFail, opt);
};

/* 车辆历史轨迹 */
export const getDrivingInfo = (payload, fnSuccess, fnFail) => {
  baseService('save', getDrivingInfoApi, fnSuccess, fnFail, payload);
};

/* 具体信息 */
export const getDetailInfo = (payload, fnSuccess, fnFail) => {
  baseService('save', getDetailInfoApi, fnSuccess, fnFail, payload);
};