// 导入baseService
import { baseService } from '@/service/baseService';

const selectGenderByAgeApi = '/api/userSpecial/selectGenderByAge';    // 用户年龄分布与性别统计
const selectVehicleColorApi = '/api/userSpecial/selectVehicleColor';   // 用户年龄分段与车辆颜色统计
const countByVehicleColorAndGenderApi = '/api/userSpecial/countByVehicleColorAndGender';   // 用户性别与车辆颜色统计
const selectPositionApi = '/api/userSpecial/selectPosition';   // 查询车辆的位置信息，包含省份，城市经纬度信息
const selectAllApi = '/api/userSpecial/selectAll';   // 统计所有人数
const selectActiveNumApi = '/api/userSpecial/selectActiveNum';   // 用户活跃人数
const selectCarProvinceApi = '/api/userSpecial/selectCarProvince';   // 按省份,和性别分别统计用户数量
const selectCarCityApi = '/api/userSpecial/selectCarCity';   // 查询某个省份下，每个市级城市的用户数量，并按性别分组
const selectRunningMileApi = '/api/userSpecial/selectRunningMile';   // 今日用户行驶里程 top5
const selectRunningMinutesApi = '/api/userSpecial/selectRunningMinutes';   // 今日用户用车时长排行 top5
const selectTotalMileApi = '/api/userSpecial/selectTotalMile';   // 用户年龄分段和里程统计
const selectByTiemIntervalApi = '/api/userSpecial/selectByTiemInterval';   // 用户用车时段统计
const countConstellationApi = '/api/userSpecial/countConstellation';  // 用户星座排名

/**
 * 用户年龄分布与性别统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectGenderByAge = (opt, fnSuccess, fnFail) => {
  baseService('get', selectGenderByAgeApi, fnSuccess, fnFail, opt);
};

/**
 * 用户年龄分段与车辆颜色统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectVehicleColor = (opt, fnSuccess, fnFail) => {
  baseService('get', selectVehicleColorApi, fnSuccess, fnFail, opt);
};

/**
 * 用户星座排名
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const countConstellationRank = (opt, fnSuccess, fnFail) => {
  baseService('get', countConstellationApi, fnSuccess, fnFail, opt);
};

/**
 * 用户性别与车辆颜色统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const countByVehicleColorAndGender = (opt, fnSuccess, fnFail) => {
  baseService('get', countByVehicleColorAndGenderApi, fnSuccess, fnFail, opt);
};

/**
 * 查询车辆的位置信息，包含省份，城市经纬度信息
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectPosition = (opt, fnSuccess, fnFail) => {
  baseService('get', selectPositionApi, fnSuccess, fnFail, opt);
};

/**
 * 统计所有人数
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectAll = (opt, fnSuccess, fnFail) => {
  baseService('get', selectAllApi, fnSuccess, fnFail, opt);
};

/**
 * 用户活跃人数
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectActiveNum = (opt, fnSuccess, fnFail) => {
  baseService('get', selectActiveNumApi, fnSuccess, fnFail, opt);
};

/**
 * 按省份,和性别分别统计用户数量
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectCarProvince = (opt, fnSuccess, fnFail) => {
  baseService('get', selectCarProvinceApi, fnSuccess, fnFail, opt);
};

/**
 * 查询某个省份下，每个市级城市的用户数量，并按性别分组
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectCarCity = (opt, fnSuccess, fnFail) => {
  baseService('get', selectCarCityApi, fnSuccess, fnFail, opt);
};

/**
 * 今日用户行驶里程
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectRunningMile = (opt, fnSuccess, fnFail) => {
  baseService('get', selectRunningMileApi, fnSuccess, fnFail, opt);
};

/**
 * 今日用户用车时长排行
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectRunningMinutes = (opt, fnSuccess, fnFail) => {
  baseService('get', selectRunningMinutesApi, fnSuccess, fnFail, opt);
};

/**
 * 用户年龄分段和里程统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectTotalMile = (opt, fnSuccess, fnFail) => {
  baseService('get', selectTotalMileApi, fnSuccess, fnFail, opt);
};

/**
 * 用户用车时段统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const selectByTiemInterval = (opt, fnSuccess, fnFail) => {
  baseService('get', selectByTiemIntervalApi, fnSuccess, fnFail, opt);
};
