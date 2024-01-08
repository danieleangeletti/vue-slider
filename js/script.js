const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    visibility: 'visible'
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    visibility: ''
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    visibility: ''
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    visibility: ''
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    visibility: ''
                }
            ],

            current_slide: 0

        };
    },

    methods: {
        next_image(){
            this.slides[this.current_slide].visibility = '';
            this.current_slide++;

            if (this.current_slide == this.slides.length) {
                this.current_slide = 0;
            }

            this.slides[this.current_slide].visibility = 'visible';
        },

        previous_image(){
            this.slides[this.current_slide].visibility = '';
            this.current_slide--;

            if (this.current_slide == - 1) {
                this.current_slide = this.slides.length - 1;
            }
            
            this.slides[this.current_slide].visibility = 'visible';
        }
    }
}).mount('#app');