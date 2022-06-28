const check = require('./../lib/chackLib.js');

let paginationWithFromTo = (searchParameter, fromParameter, toParameter, setOrder, filterFromRange, filterToRange) => {
    let search = check.isEmpty(searchParameter) ? "" : searchParameter;
    let from = check.isEmpty(fromParameter) ? 1 : fromParameter;
    let to = check.isEmpty(toParameter) ? 1000 : toParameter;
    let order = check.isEmpty(setOrder) ? "" : setOrder;
    let filterFrom = check.isEmpty(filterFromRange) ? "" : filterFromRange;
    let filterTo = check.isEmpty(filterToRange) ? "" : filterToRange;
    let pageSize = Number((to - from) + 1);
    let offset = Number(from - 1);
    
    return { search, offset, pageSize, order, filterFrom, filterTo };
}

let paginationWithFromToAndSort = (searchParameter, fromParameter, toParameter, sortParamater, orderByParamater) => {
    // let search = (typeof searchParameter == "undefined" ) ? "" : searchParameter;
    let search = check.isEmpty(searchParameter) ? "" : searchParameter;

    let from = (typeof fromParameter == "undefined" ) ? 1 : fromParameter;
    let to = (typeof toParameter == "undefined") ? 1000 : toParameter;
    // let from = check.isEmpty(fromParameter) ? 1 : fromParameter;
    // let to = check.isEmpty(toParameter) ? 10 : toParameter;
    let sort = (typeof sortParamater == "undefined") ? "created_at" : sortParamater
    let orderby = (typeof orderByParamater == "undefined") ? "DESC" : orderByParamater
  
    let pageSize = Number((to - from) + 1);
    let offset = Number(from - 1);
  
    return { search, offset, pageSize, sort, orderby };
  }

let paginationWithPageNumberPageSize = (searchParameter, pageNumberParameter, pageSizeParameter) => {
    let search = check.isEmpty(searchParameter) ? "" : searchParameter;
    let pageNumber = !check.isEmpty(pageNumberParameter) ? pageNumberParameter : 1;
    let pageSize = pageSizeParameter || 10;
    if (pageSize != 0 && pageNumber != 0) {
        userOffset = (pageSize * (pageNumber - 1));
    }
    return { search, userOffset, pageSize, pageNumber };
}

let NextAndPrevPageNumber = (pageNumberParameter, pageSizeParameter, userCount) => {
    let currentObject = pageNumberParameter * pageSizeParameter;
    let prev = currentObject == pageSizeParameter ? null : Number(pageNumberParameter) - 1;
    let next = currentObject >= userCount ? null : Number(pageNumberParameter) + 1;
    let lastPage = Math.ceil(userCount / pageSizeParameter);

    return { next, prev, lastPage };

}

module.exports = {
    paginationWithFromTo: paginationWithFromTo,
    paginationWithPageNumberPageSize: paginationWithPageNumberPageSize,
    NextAndPrevPageNumber: NextAndPrevPageNumber,
    paginationWithFromToAndSort:paginationWithFromToAndSort
}