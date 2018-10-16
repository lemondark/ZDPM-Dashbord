// 导入baseService
import { baseService } from '@/service/baseService';

const listSOHPowerNumApi = '/api/vehicleAnalysis/listSOHPowerNum';    // 电池SOH与充电次数统计
const listSOHMileageApi = '/api/vehicleAnalysis/listSOHMileage';   // 电池SOH&里程分布统计
const listAlarmApi = '/api/vehicleAnalysis/listGBAlarm';   // 近30日车辆报警次数统计
const listAlarmTypeApi = '/api/vehicleAnalysis/listAlarmType';   // 车辆报警类型统计
const listChargePowerIntervalApi = '/api/vehicleAnalysis/listChargePowerInterval';   // 车辆充电时段统计
const listSOCIntervalApi = '/api/vehicleAnalysis/listSOCInterval';   // 车辆充电起始SOC区间统计
const listAllMileageApi = '/api/vehicleAnalysis/listAllMileage';   // 车辆总里程分段统计
const listSOHIntervalApi = '/api/vehicleAnalysis/listSOHInterval';   // 电池SOH分段统计
const listChargeApi = '/api/vehicleAnalysis/listCharge';		// 近7日充电量，充电次数，充电时长

/**
 * 电池SOH与充电次数统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listSOHPowerNum = (opt, fnSuccess, fnFail) => {
  baseService('get', listSOHPowerNumApi, fnSuccess, fnFail, opt);
};

/**
 * 电池SOH&里程分布统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listSOHMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', listSOHMileageApi, fnSuccess, fnFail, opt);
};

/**
 * 近30日车辆报警次数统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listAlarm = (opt, fnSuccess, fnFail) => {
  baseService('get', listAlarmApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆报警类型统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listAlarmType = (opt, fnSuccess, fnFail) => {
  baseService('get', listAlarmTypeApi, fnSuccess, fnFail, opt);
};

/**
 *车辆充电时段统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listChargePowerInterval = (opt, fnSuccess, fnFail) => {
  baseService('get', listChargePowerIntervalApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆充电起始SOC区间统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listSOCInterval = (opt, fnSuccess, fnFail) => {
  baseService('get', listSOCIntervalApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆总里程分段统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listAllMileage = (opt, fnSuccess, fnFail) => {
  baseService('get', listAllMileageApi, fnSuccess, fnFail, opt);
};

/**
 * 电池SOH分段统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listSOHInterval = (opt, fnSuccess, fnFail) => {
  baseService('get', listSOHIntervalApi, fnSuccess, fnFail, opt);
};

/**
 * 近7日充电量，充电次数，充电时长统计
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listCharge = (opt, fnSuccess, fnFail) => {
  baseService('get', listChargeApi, fnSuccess, fnFail, opt);
};