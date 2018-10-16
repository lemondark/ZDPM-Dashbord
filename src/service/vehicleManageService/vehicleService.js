// 导入baseService
import { baseService } from '@/service/baseService';

// 车辆信息管理
const vehicleListAllApi = '/api/vehicleArchives/list';                           // 车辆列表
const vehicleListApi = '/api/oneVehicleDetail/getLikeVins';                           // 模糊查询vin
const vehicleDeleteApi = '/api/vehicleArchives/delete';                       // 删除
const vehicleSaveApi = '/api/vehicleArchives/save';                           // 保存
const vehicleDetailApi = '/api/vehicleArchives/queryDetails';                 // 详情
const vehicleExportApi = '/api/vehicleArchives/excel';                 // 导出
const butorListApi = '/api/vehicleDistributorInformation/list';               // 经销商
const keyWordListApi = '/api/vehicleKeywordModify/list';                      // 关重件变更
const maintenanceApi = '/api/maintenanceController/list';                      // 维修保养
const keyPartApi = '/api/vehicleArchives/findVehicleHeavyParts';                      // 关重件信息

/**
 * 车辆列表
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleListAll = (opt, fnSuccess, fnFail) => {
  baseService('get', vehicleListAllApi, fnSuccess, fnFail, opt);
};
/**
 * 关重件详情
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const keyPart = (opt, fnSuccess, fnFail) => {
  baseService('get', keyPartApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆列表
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleList = (opt, fnSuccess, fnFail) => {
  baseService('get', vehicleListApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆新增
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleSave = (opt, payload, fnSuccess, fnFail) => {
  baseService('save', vehicleSaveApi, fnSuccess, fnFail, opt, payload);
};

/**
 * 车辆删除
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleDelete = (opt, fnSuccess, fnFail) => {
  baseService('delete', vehicleDeleteApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆详情
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleDetail = (opt, payload, fnSuccess, fnFail) => {
  baseService('save', vehicleDetailApi, fnSuccess, fnFail, opt, payload);
};

/**
 * 车辆列表
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const vehicleExport = (opt, fnSuccess, fnFail) => {
  baseService('get', vehicleExportApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆经销商
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const butorList = (opt, fnSuccess, fnFail) => {
  baseService('get', butorListApi, fnSuccess, fnFail, opt);
};

/**
 * 关重件变更
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const keyWordList = (opt, fnSuccess, fnFail) => {
  baseService('get', keyWordListApi, fnSuccess, fnFail, opt);
};

/**
 * 车辆列表
 * @param fnSuccess 成功回掉
 * @param fnFail    失败回掉
 * @return void
 */
export const maintenance = (opt, fnSuccess, fnFail) => {
  baseService('get', maintenanceApi, fnSuccess, fnFail, opt);
};
