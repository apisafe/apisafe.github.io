var Main = (function(){
	var self = this;

	self.construct = function(){	
		document.querySelector('body').classList.add('active');
	}

	self['[show-example]'] = function(){

		return {
			click:function(){
				self._selector('.fullscreen')[0].classList.remove('hide');
			}
		}
	}

	self['[hide-example]'] = function(){

		return {
			click:function(){
				self._selector('.fullscreen')[0].classList.add('hide');
			}
		}
	}

	return this;
})();