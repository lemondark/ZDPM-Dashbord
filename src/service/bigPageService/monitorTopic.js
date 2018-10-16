// 导入baseService
import { baseService } from '@/service/baseService';
import { webSck } from '@/service/websocket';

const listOneVehicleSOHApi = '/api/oneVehicleDetail/listOneVehicleSOH';   // 单车SOH
const listOneVehicleHistoryApi = '/api/oneVehicleDetail/listOneVehicleHistory';   // 单车近24小时历史行驶参数曲线
const listOneVehicleAlarmApi = '/api/oneVehicleDetail/listOneVehicleAlarm';   // 单车新增报警类型
const singleCarStatusApi = '/api/screenUserRanking/singleCarStatus';   // 查询车辆状态
const listVinApi = '/api/oneVehicleDetail/listVin';                       // 默认Vin
const listOneVehicleArchivesApi = '/api/oneVehicleDetail/listOneVehicleArchives';	// 车辆档案信息

/**
 * 车辆监控
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return ws
 */
export const monitor = (api, opt, fnSuccess, fnFail) => {
  return webSck(api, opt, fnSuccess, fnFail);
};

/**
 * 单车SOH
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listOneVehicleSOH = (opt, fnSuccess, fnFail) => {
  baseService('get', listOneVehicleSOHApi, fnSuccess, fnFail, opt);
};

/**
 * 单车近24小时历史行驶参数曲线
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listOneVehicleHistory = (opt, fnSuccess, fnFail) => {
  baseService('get', listOneVehicleHistoryApi, fnSuccess, fnFail, opt);
};

/**
 * 单车新增报警类型
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listOneVehicleAlarm = (opt, fnSuccess, fnFail) => {
  baseService('get', listOneVehicleAlarmApi, fnSuccess, fnFail, opt);
};

/**
 * 查询车辆状态
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const singleCarStatus = (opt, fnSuccess, fnFail) => {
  baseService('get', singleCarStatusApi, fnSuccess, fnFail, opt);
};

/**
 * 默认Vin
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const listVin = (opt, fnSuccess, fnFail) => {
  baseService('get', listVinApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆档案信息
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return ws
 */

export const listOneVehicleArchives = (opt, fnSuccess, fnFail) => {
   baseService('get', listOneVehicleArchivesApi, fnSuccess, fnFail, opt);
};