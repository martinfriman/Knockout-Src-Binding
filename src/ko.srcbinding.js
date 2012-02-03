(function () {
	ko.bindingHandlers.src = {
	    update: function(element, valueAccessor, allBindingsAccessor, viewModel, context) {
	        
	        var src = ko.utils.unwrapObservable(valueAccessor());
	        
	        ko.bindingHandlers.attr.update(
	        	element,
				function () { return { src: src }; },
				allBindingsAccessor,
				viewModel,
				context);
			}
			
	};
	
})();