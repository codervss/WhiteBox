import React from 'react'
import {View, ScrollView, RefreshControl} from 'react-native'

export default ({bg, loading, onRefresh, renderFooter, renderHeader, children, fixed}) =>{

    return(
        <View style={{flex : 1, backgroundColor : bg || 'transparent'}}>
            <View style={{flex : 1}}>
            {
            fixed ?
                <View style={{flex : 1}}>
                    {children}
                </View>
            :
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    nestedScrollEnabled
                    refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        enabled={onRefresh ? true : false}
                        onRefresh={onRefresh && onRefresh()}
                    />
                    }
                >
                {children}
                </ScrollView>
            }
            </View>
        </View>
    )
}
