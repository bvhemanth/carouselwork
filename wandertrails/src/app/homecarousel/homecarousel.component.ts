import { Component, OnInit ,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-homecarousel',
  templateUrl: './homecarousel.component.html',
  styleUrls: ['./homecarousel.component.scss']
})
export class HomecarouselComponent implements OnInit, AfterViewInit{

  // static data
  data= [
    {imgURL :"https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/coorg.jpg", title: 'Coorg', subtitle: 'Exotic highlands of the Western Ghats'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/ooty.jpg", title : 'Ooty',subtitle : "'Nilgiris' pride and joy"},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/Manali.jpg",title : 'Manali',subtitle : 'Valley of the Gods'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/coonoor.jpg",title : 'Coonoor',subtitle : 'Freshness that brews in the Nilgiris'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/shimla.jpg",title : 'Shimla',subtitle : 'Toy trains, pine trees & snow - A Christmassy landscape'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/Nainital.jpg",title : 'Naintal',subtitle : 'Lakes that shimmer'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/munnar.jpg",title : 'Munnar',subtitle : "'Everyone's cup of tea"},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/goa.jpg",title : 'Goa',subtitle : 'Where Goa slows down'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/Masinagudi.jpg",title : 'Masinagudi',subtitle : "'Kipling's Jungle Book"},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/Pondicherry.jpg",title : 'Pondicherry',subtitle : 'La Petit French Riviera'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/dharamshala.jpg",title : 'Dharmashala',subtitle : 'Little Tibet, Lots of love'},
    {imgURL : "https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_fill,g_face,w_223,h_354/newdesign/destinations/locations/posters/lonavla-poster.jpg",title : 'Lonavala',subtitle : "The 'crunchy sweet' soul of the Sahyadris"}]
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
    // initialize slick carousel using class name
    $('.places')
    // slick-initialize will recall if not initialize
    .not('.slick-initialized')
      .slick(
        {
          lazyLoad: 'ondemand',
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
          nextArrow: '<img class="slick-next" src="https://res.cloudinary.com/wandertrails/image/upload/q_auto/homepage/right.png"/>',
          prevArrow: '<img class="slick-prev" src="https://res.cloudinary.com/wandertrails/image/upload/q_auto/homepage/left.png"/>',
          speed: 800,
          autoplay: false,
          infinite: false,
            responsive:[{breakpoint: 1024,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: false,
              variableWidth: !0,
              cssEase: false,
              swipeToSlide: true,
              arrows: false,
            }}
          ,
          // tablet
          {breakpoint: 769,
            settings:{
              slidesToShow: 3.25,
              arrows: false,
              cssEase: false, 
              swipeToSlide: true,
              centerPadding: false,
              toucMove: true
            }
          },
          // mobile
          {
            breakpoint:360,
            settings:{
              slidesToShow: 2.25,
              arrows: false,
              swipeToSlide: true,
            }
            }
          ]
        }
      );
  }

}
