/**
 * Created by neil on 2016-04-11.
 * 存放组件共享的一些读取数据方法
 */

// modified by ShenWei, 2016-09-07, integrated with cometD.
export const isShowCart = state => {
    return state.cometdCart.isShowCart;
};
// modified by ShenWei, 2016-09-07, integrated with cometD.
export const isFoldCart = state => {
    return state.cometdCart.isFoldCart;
};

// user
export const userData = state => {
    return state.user.userData;
};

export const isMember = state => {
    return state.user.isMember;
};

export const getUserInfo = state => {
    return state.user.userData;
};

// base
export const merchantInfo = state => {
    return state.base.merchantInfo;
};

export const activityInfo = state => {
    return state.base.activityInfo;
};

export const browseModel = state => {
    return state.base.browseModel;
};

export const gameURL = state => {
    return state.base.gameURL;
};

export const note = state => {
    return $.trim(state.base.merchantInfo.merchantNotice);
};

export const isOpenOrderPrice = state => {
  return state.base.merchantInfo.isOpenOrderPrice;
};


// 获取支付方式 0为先支付 1为后支付
export const payType = state => {
    return state.base.merchantInfo.payType;
};

export const orderDishList = state => {
    return state.base.orderDishList;
};

export const orderList = state => {
    return state.base.orderList;
};

export const coupons = state => {
    return state.base.coupons;
};

export const userActiveCoupon = state => {
    return state.user.userActiveCoupon;
};

export const promotion = state => {
    return state.base.promotion;
};

export const signAwards = state => {
    return state.base.signAwards;
};

export const currentCoupons = state => {
    return state.base.currentCoupons;
};

// get cometD cart info
export const cometdCart = state => {
    return state.cometdCart;
};
// get this guy cart info
export const cometdCartSelf = state => {
    var customerId = state.cometdCart.cartData.currentSession.customerId || '';
    if(customerId) {
        return state.cometdCart.cartData.dishDetail[customerId];
    }
};
// get all guys cart info
export const wholeCometdCartData = state => {
    var wholeCartData = {
        select: [],
        dishCount: 0,
        totalPrice: 0,
        vipTotalPrice: 0,
        peopleCount: 0,
        currentSessionId: state.cometdCart.cartData.currentSession.sessionId,
        shoppingCartCode: ''
    }
    var customerId = state.cometdCart.cartData.currentSession.customerId || '';
    if(customerId && Object.keys(state.cometdCart.cartData['dishDetail']).length) {
        for(var customerkey in state.cometdCart.cartData['dishDetail']) {
            wholeCartData.peopleCount += 1;
            // console.log(state.cometdCart.cartData['dishDetail'][customerkey]['dishes'])
            if(state.cometdCart.cartData['dishDetail'][customerkey]['dishes'] && state.cometdCart.cartData['dishDetail'][customerkey]['dishes'].length) {
                var person_cart_items = {};
                person_cart_items['headImgUrl'] = state.cometdCart.cartData['dishDetail'][customerkey]['headImgUrl'];
                person_cart_items['customerName'] = state.cometdCart.cartData['dishDetail'][customerkey]['customerName'];
                person_cart_items['customerId'] = customerkey;
                person_cart_items['tableName'] = state.cometdCart.cartData['dishDetail'][customerkey]['tableName'];
                person_cart_items['dishDetail'] = [];
                if(state.cometdCart.cartData['dishDetail'][customerkey]['customerId'] == customerId) {
                    person_cart_items['isFirstShow'] = 1;
                } else {
                    person_cart_items['isFirstShow'] = 0;
                }
                state.cometdCart.cartData['dishDetail'][customerkey]['dishes'].map(function(item) {
                    person_cart_items['dishDetail'].push(item);
                    wholeCartData.dishCount += ~~(item.quantity);
                    wholeCartData.totalPrice += ~~(item.quantity) * parseFloat(item.salePrice);
                    if(parseFloat(item.vipPrice) > 0) {
                        wholeCartData.vipTotalPrice += ~~(item.quantity) * parseFloat(item.vipPrice);
                    } else {
                        wholeCartData.vipTotalPrice += ~~(item.quantity) * parseFloat(item.salePrice);
                    }
                });
                wholeCartData.select.push(person_cart_items);
            }    
        }
    }
    return wholeCartData;    
};
// group whole cart info by dish's category
export const groupByCategoryCometdCartData = state => {
    var groupByCategoryCometdCartData = {
        select: {}
    }
    var customerId = state.cometdCart.cartData.currentSession.customerId || '';
    if(customerId && Object.keys(state.cometdCart.cartData['dishDetail']).length) {
        for(var customerkey in state.cometdCart.cartData['dishDetail']) {
            if(state.cometdCart.cartData['dishDetail'][customerkey]['dishes'] && state.cometdCart.cartData['dishDetail'][customerkey]['dishes'].length) {
                state.cometdCart.cartData['dishDetail'][customerkey]['dishes'].map(function(item) {
                    var combinedKey = (item.isSetFood == 1 ? item.itemId + '&' + window.encodeURIComponent(item.setFoodInfo) : item.itemId + '&' + window.encodeURIComponent(item.taste) + window.encodeURIComponent(item.garnish));
                    if(groupByCategoryCometdCartData.select[item.classify]) {
                        groupByCategoryCometdCartData.select[item.classify]['categoryQty'] += ~~(item.quantity);
                        if(groupByCategoryCometdCartData.select[item.classify]['dishDetail'][combinedKey]) {
                            groupByCategoryCometdCartData.select[item.classify]['dishDetail'][combinedKey].displayQty += ~~(item.quantity);
                        } else {
                            groupByCategoryCometdCartData.select[item.classify]['dishDetail'][combinedKey] = $.extend(item, { displayQty: ~~(item.quantity) });
                        }
                    } else {
                        groupByCategoryCometdCartData.select[item.classify] = {classifyName: item.classifyName, classify: item.classify, categoryQty: ~~(item.quantity), dishDetail: {}};
                        groupByCategoryCometdCartData.select[item.classify]['dishDetail'][combinedKey] = $.extend(item, { displayQty: ~~(item.quantity) });    
                    }
                });   
            }    
        }
    }
    return groupByCategoryCometdCartData;
};
// this guy confirmed cart info, ready for ordering. 
export const confirmedCometdCart = state => {
    return state.cometdCart.confirmedCometdCart;
};
// 朋友圈推荐信息
export const friendRecommend = state => {
    return state.base.friendRecommend;
};