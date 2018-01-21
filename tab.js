function Tab (node){	
	this.tabContianer = $(node)
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
    	this.blk = this.tabContianer.find('.blk')
    	this.bind()
    },
    bind: function(){
    	console.log(this.blk)
    	this.blk.on('click',function(){
    		console.log($(this))
    		$(this).addClass('active')
			$(this).siblings('.blk').removeClass('active')
			$(this).parent('.header').next('.content').children('.panel').eq($(this).index()).addClass('active')
			$(this).parent('.header').next('.content').children('.panel').eq($(this).index()).siblings().removeClass('active')
    	})
    }
}

var tab1 = new Tab($('.tab-container')[0]);
var tab2 = new Tab($('.tab-container')[1]);
tab1.init()
tab2.init()