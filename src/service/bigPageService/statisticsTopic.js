// 导入baseService
import { baseService } from '@/service/baseService';

const getVinCodeApi = '/api/screenUserRanking/getVinCode';   // vin码初始化
const alarmCountApi = '/api/screenUserRanking/alarmCount';    // 报警分类统计
const carInfoApi = '/api/screenUserRanking/carInfo';    // 统计数据
const chargeIntervalApi = '/api/screenUserRanking/chargeInterval';    // 车辆充电时段统计
const counntAlarm30Api = '/api/screenUserRanking/counntAlarm30';    // 近30日内报警次数统计
const countChargeAndConsumptionApi = '/api/screenUserRanking/countChargeAndConsumption';    // 近15日百公里行驶路程及耗电
const countChargeConsumptionPowerApi = '/api/screenUserRanking/countChargeConsumptionPower';    // 近15日充电统计
const socByChargeTimeApi = '/api/screenUserRanking/socByChargeTime';    // 最近一次SOC充电变化曲线
const socByMileageApi = '/api/screenUserRanking/socByMileage';    // 最近一次行驶时间与SOC曲线
const socChargeIntervalApi = '/api/screenUserRanking/socChargeInterval';    // 车辆充电SOC变化曲线
const sohAndChargeTimesApi = '/api/screenUserRanking/sohAndChargeTimes';    // 车辆SOH及充电次数变化曲线
const sohAndTotalMileageApi = '/api/screenUserRanking/sohAndTotalMileage';    // soh与行驶里程变化曲线统计
const singleCarStatusApi = '/api/screenUserRanking/singleCarStatus';    // 获取车辆状态
const weekChargeMinutesApi = '/api/screenUserRanking/weekChargeMinutes';   // 近一个月充电时长分析(周)
const weekVehicleRunningApi = '/api/screenUserRanking/day30VehicleRunning';   // 近一个月车辆运行时长分析(周)
const day15VehicleRunningApi = '/api/screenUserRanking/day15VehicleRunning';   // 近15日车辆运行时长分析

/**
 * Vin码初始化
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const getVinCode = (opt, fnSuccess, fnFail) => {
  baseService('get', getVinCodeApi, fnSuccess, fnFail, opt);
};
/**
 * 报警分类统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const alarmCount = (opt, fnSuccess, fnFail) => {
  baseService('get', alarmCountApi, fnSuccess, fnFail, opt);
};
/**
 *  统计数据
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const carInfo = (opt, fnSuccess, fnFail) => {
  baseService('get', carInfoApi, fnSuccess, fnFail, opt);
};
/**
 * 车辆充电时段统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const chargeInterval = (opt, fnSuccess, fnFail) => {
  baseService('get', chargeIntervalApi, fnSuccess, fnFail, opt);
};
/**
 * 近30日内报警次数统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const counntAlarm30 = (opt, fnSuccess, fnFail) => {
  baseService('get', counntAlarm30Api, fnSuccess, fnFail, opt);
};
/**
 * 近15日百公里行驶路程及耗电
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const countCharge = (opt, fnSuccess, fnFail) => {
  baseService('get', countChargeAndConsumptionApi, fnSuccess, fnFail, opt);
};
/**
 * 近15日充电,耗电统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const countConsum = (opt, fnSuccess, fnFail) => {
  baseService('get', countChargeConsumptionPowerApi, fnSuccess, fnFail, opt);
};
/**
 * 最近一次SOC充电变化曲线
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const socByChargeTime = (opt, fnSuccess, fnFail) => {
  baseService('get', socByChargeTimeApi, fnSuccess, fnFail, opt);
};
/**
 * 最近一次SOC衰减曲线
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const socByMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', socByMileageApi, fnSuccess, fnFail, opt);
};
/**
 * 车辆充电SOC变化曲线
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const socChargeInterval = (opt, fnSuccess, fnFail) => {
  baseService('get', socChargeIntervalApi, fnSuccess, fnFail, opt);
};
/**
 * 车辆SOH及充电次数变化曲线
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const sohAndChargeTimes = (opt, fnSuccess, fnFail) => {
  baseService('get', sohAndChargeTimesApi, fnSuccess, fnFail, opt);
};
/**
 * soh与行驶里程变化曲线统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const sohAndTotalMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', sohAndTotalMileageApi, fnSuccess, fnFail, opt);
};
/**
 * 获取车辆状态
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const singleCarStatus = (opt, fnSuccess, fnFail) => {
  baseService('get', singleCarStatusApi, fnSuccess, fnFail, opt);
};
/**
 * 近一个月充电时长分析
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const weekChargeMinutes = (opt, fnSuccess, fnFail) => {
  baseService('get', weekChargeMinutesApi, fnSuccess, fnFail, opt);
};
/**
 * 近一个月车辆运行时长分析
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const weekVehicleRunning = (opt, fnSuccess, fnFail) => {
  baseService('get', weekVehicleRunningApi, fnSuccess, fnFail, opt);
};
/**
 * 近15日车辆运行时长分析
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const day15VehicleRunning = (opt, fnSuccess, fnFail) => {
  baseService('get', day15VehicleRunningApi, fnSuccess, fnFail, opt);
};