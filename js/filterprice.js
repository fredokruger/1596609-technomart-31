
let filterPrice = document.querySelector('.filter-price');

noUiSlider.create(filterPrice, {
    start: [0, 30000],
    connect: true,
    range: {
        'min': 0,
        'max': 50000
    }
});


let minCostInput = document.querySelector('.filter-price__input-price--min'),
		maxCostInput = document.querySelector('.filter-price__input-price--max');

	// When the slider value changes, update the input and span
	filterPrice.noUiSlider.on('update', function( values, handle ) {
		if ( handle ) {
			maxCostInput.value = Math.round(values[handle]);
		} else {
			minCostInput.value = Math.round(values[handle]);
		}
	});

	minCostInput.addEventListener('change', function(){
		filterPrice.noUiSlider.set([this.value, null]);
	});

	maxCostInput.addEventListener('change', function(){
		filterPrice.noUiSlider.set([null, this.value]);
	});
