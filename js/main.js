var Person = Backbone.Model.extend({
	defaults : {
		name : 'admin',
		age : 34,
		occupation : 'webDeveloper'
	},

	validate : function(attrs) {
		if (attrs.age < 0) {
			return "write a positive age";
		}
		
		if(! attrs.name){
			return 'name must not be empty';
		}
	},

	work : function() {
		return this.get('name') + " is working";
	}
});

