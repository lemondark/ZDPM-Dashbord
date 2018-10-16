// 导入baseService
import { baseService } from '@/service/baseService';

const listAllMileageApi = '/api/vehicleTopic/listAllMileage';    // 统计总里程前9
const listTodayMileageApi = '/api/vehicleTopic/listTodayMileage';    // 统计今日里程前9
const listMonthMileageApi = '/api/vehicleTopic/listMonthMileage';     // 统计当月里程排行
const listVehicleRunningMinutesApi = '/api/vehicleTopic/listVehicleRunningMinutes';    // 近7日用车时长统计
const listOnLineTimeApi = '/api/vehicleTopic/listOnLineTime';    // 统计车辆在线时长百分比
const listMileagePowerConsumptionApi = '/api/vehicleTopic/listMileagePowerConsumption';    // 统计近15日总里程与总耗电量
const listVehicleDataApi = '/api/vehicleTopic/listVehicleData';    // 车辆基础数据
const listDealerServiceStationAllApi = '/api/vehicleTopic/listDealerServiceStationAll';    // 统计服务站总数和经销商
// const listAreaVehicleApi = '/api/vehicleTopic/listAreaVehicle';    // 查询区域车辆状态
const listVehicleStateApi = '/api/vehicleFlow/listVehicleState';    // 大屏车辆流动
const listCityVehicleNumApi = '/api/vehicleFlow/listCityVehicleNum';    // 大屏车辆流动前10
const listCityVehicleStateApi = '/api/vehicleFlow/listCityVehicleState';    // 城市车辆分布
const vehicleTopicStateApi = '/api/vehicleTopic/listVehicleState';    // 查询区域车辆状态 里面不包含里程数
const listCityVehicleMileageApi = '/api/vehicleTopic/listCityVehicleMileage';  // 查询区域车辆数量与里程排名
const cityByProvinceApi = '/api/vehicleTopic/listProvinceAndCity';  // 获得省下面的市
/**
 * 统计总里程前9
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listAllMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', listAllMileageApi, fnSuccess, fnFail, opt);
};
/**
 * 获得省下面的市
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const cityByProvince = (opt, fnSuccess, fnFail) => {
  baseService('get', cityByProvinceApi, fnSuccess, fnFail, opt);
};
/**
 * 查询区域车辆状态 里面不包含里程数
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleTopicState = (opt, fnSuccess, fnFail) => {
  baseService('get', vehicleTopicStateApi, fnSuccess, fnFail, opt);
};
/**
 * 统计今日里程前9
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listTodayMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', listTodayMileageApi, fnSuccess, fnFail, opt);
};
/**
 * 统计当月里程
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listMonthMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', listMonthMileageApi, fnSuccess, fnFail, opt);
};
/**
 * 近7日用车时长统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listVehicleRunningMinutes = (opt, fnSuccess, fnFail) => {
  baseService('get', listVehicleRunningMinutesApi, fnSuccess, fnFail, opt);
};
/**
 * 统计车辆在线时长百分比
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listOnLineTime = (opt, fnSuccess, fnFail) => {
  baseService('get', listOnLineTimeApi, fnSuccess, fnFail, opt);
};
/**
 * 车辆基础数据
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listVehicleData = (opt, fnSuccess, fnFail) => {
  baseService('get', listVehicleDataApi, fnSuccess, fnFail, opt);
};
/**
 * 统计近15日总里程与总耗电量
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listMileagePower = (opt, fnSuccess, fnFail) => {
  baseService('get', listMileagePowerConsumptionApi, fnSuccess, fnFail, opt);
};
/**
 * 统计服务站总数和经销商
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listDealerStation = (opt, fnSuccess, fnFail) => {
  baseService('get', listDealerServiceStationAllApi, fnSuccess, fnFail, opt);
};
/**
 * 查询区域车辆数量与里程排名
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listCityVehicleMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', listCityVehicleMileageApi, fnSuccess, fnFail, opt);
};
/**
 * 大屏车辆流动
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listVehicleState = (opt, fnSuccess, fnFail) => {
  baseService('get', listVehicleStateApi, fnSuccess, fnFail, opt);
};
/**
 * 大屏车辆流动前十
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listCityNum = (opt, fnSuccess, fnFail) => {
  baseService('get', listCityVehicleNumApi, fnSuccess, fnFail, opt);
};
/**
 * 城市车辆分布
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listCityState = (opt, fnSuccess, fnFail) => {
  baseService('get', listCityVehicleStateApi, fnSuccess, fnFail, opt);
};