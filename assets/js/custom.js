new Splide( '.splide-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination:true,
    speed:400,
    gap:30,
    breakpoints: {
		1199: {
			perPage: 2,
         
		},
      991: {
         perPage: 2,
         gap:20,
		},
      767: {
         perPage: 1,
         gap:20,
		},
 },
}
  ).mount();

 new Splide( '.testimonial-splide-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination:true,
    speed:400,
    gap:10,

 } ).mount();