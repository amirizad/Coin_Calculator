$(function () {
	var v = new CoinCalculator(total);
	v.resetCalc();
	$('#total').on('change mouseup keyup', function () {
		if ($('#total').val() < 1 || $('#total').val() > 99) { v.resetCalc() }
		else { $('#total').val(parseInt($('#total').val()));$('#calc').prop('disabled', false); }
	});
	$('#calc').click(function () {
		v.coinsCalc($('#total').val())
	})
});

var CoinCalculator = function(total) {
	return {
		resetCalc: function() {
			$('#total').val(0);
			$('#calc').prop('disabled', true);
			$('.count').addClass("hidelabel");
		},
		coinsCalc: function(total) {
			var coins = [];
			var coinCount = [];
			var remainAmount = total;
			for (i = 0; i < 4; i++) {
				coins[i] = parseInt($('#cointxt' + i).val());
			};
			coins.sort(function(a, b){return b-a});
			for (i = 0; i < 4; i++) {
				var thislbl = $("#coinlbl" + i)
				coinCount[i] = parseInt(remainAmount / coins[i]);
				$("#cointxt" + i).val(coins[i]);
				thislbl.html(coinCount[i]);
				if (coinCount[i] > 0) { thislbl.parent().removeClass("hidelabel"); }
				else { thislbl.parent().addClass("hidelabel"); };
				remainAmount = remainAmount % coins[i];
			};
		}
	};
};