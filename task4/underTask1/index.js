'use strict'

const mergeObjectsV1 = (obj1, obj2) =>
    Object.assign({}, obj1, obj2)

const mergeObjectsV2 = (obj1, obj2) =>
    Object.assign({}, obj2, obj1)

const mergeObjectsV3 = (obj1, obj2) => {
    const obj = {...obj2, ...obj1 }
    return obj
}
const mergeObjectsV4 = (obj1, obj2) => {
    const obj = {...obj1, ...obj2 }
    return obj
}