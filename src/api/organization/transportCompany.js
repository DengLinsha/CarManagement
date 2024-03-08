import request from '@/utils/request'

// 查询承运企业列表
export function listCompany(query) {
  return request({
    url: '/biz/transportCompany/list',
    method: 'get',
    params: query
  })
}

// 查询运输公司详细信息
export function getCompany(companyId) {
    return request({
      url: '/biz/transportCompany/' + companyId,
      method: 'get'
    })
  }
  
  // 新增驻区企业
  export function addCompany(data) {
    return request({
      url: '/biz/transportCompany',
      method: 'post',
      data: data
    })
  }
  
  // 修改驻区企业
  export function updateCompany(data) {
    return request({
      url: '/biz/transportCompany',
      method: 'put',
      data: data
    })
  }
  
  // 删除驻区企业
  export function delCompany(companyId) {
    return request({
      url: '/biz/transportCompany/' + companyId,
      method: 'delete'
    })
  }
  
  
  // 获取企业编码
  export function getCompanyCode(data) {
    return request({
      url: '/biz/transportCompany/nextCode',
      method: 'post',
      data: data
    })
  }