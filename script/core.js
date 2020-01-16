module.exports = {
	setNavigationBarTitle:function(title){
		wx.setNavigationBarTitle({
			'title':title
		});
	},
	jump:function(url,type){
		var url = '/pages/'+url;
		if(type==0){
			wx.redirectTo({'url':url});
		}else if(type==1){
			wx.reLaunch({'url':url});
		}else if(type==2){
			wx.navigateTo({'url':url});
		}else if(type==3){
			wx.switchTab({'url':url});
		}else if(type==4){
			wx.navigateBack({'delta':parseInt(url)});
		}
	},
}