import { Component,AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  //title = 'travel3';
  ngAfterViewInit()
  {
   var s=document.createElement("script");
   s.type="text/javascript";
   s.innerHTML="console.log('done');"; //inline script
   s.setAttribute("data-currency","EUR");
   s.setAttribute("data-lang","en") ;
    s.setAttribute("data-affilid","utravelertempwidget") 
    s.setAttribute("cabin","ECONOMY" )
    s.setAttribute ("data-transport-types","FLIGHT")
   s.src= "https://widgets.kiwi.com/scripts/widget-search-iframe.js"; //external script
  
//data-affilid="utravelersearchresults"" 

   document.body.appendChild(s);

  }
}
