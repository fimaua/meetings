'use strict'

const addPropertyV1 = (userData, userId) =>
    userData.id = userId;

const addPropertyV2 = (userData, userId) =>
    Object.assign(userData, { id: userId })

const addPropertyV3 = (userData, userId) =>
    Object.assign({}, userData, { id: userId })

const addPropertyV4 = (userData, userId) => {
    return {...userData, id: userId }
}