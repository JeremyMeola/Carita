;(function() {
	var rows;
	var cols;

	function play(e){
		e.preventDefault();
		rows = $('#rows').val();
		cols = $('#cols').val();
		$('#args').detach();
	}
	$(document).ready(function(){
		$('#submit').click(play)
	});

})();
