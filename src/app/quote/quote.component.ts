import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quote:Quote[]  = [
         new Quote (1, 'A man who dares to waste one hour of time has not discovered the value of life', 'Charles Darwin', 'William Shakespeare', new Date(2019/7/12)),
         new Quote (2, 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style', 'Maya Angelou ', 'C. J. Cherryh', new Date(2019/2/22)),
         new Quote (3, 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', 'Helen Keller', 'Robert Benchley', new Date(2019/5/10)),
         new Quote (4, 'Those who truly want something will keep trying until they die', 'Maxime Lagacé', 'Andrew Rohrer', new Date(2018/12/29)),
         new Quote (5, 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.', 'Norman Vincent Peale', 'Ernest Hemingway', new Date(2019/7/9)),
         new Quote (6, 'You just can’t beat the person who never gives up.', 'Babe Ruth', 'Jessica Valenti', new Date(2019/8/1)),
         new Quote (7, 'Work while they sleep. Learn while they party. Save while they spend. Live like they dream', 'Syed Balkhi', 'Neil Gaiman', new Date(2019/5/21)),
          ];
          
          toggleQuotes(index){
            this.quote[index].showDescription = !this.quote[index].showDescription;
          }
           completeQuote(isComplete, index){
             if (isComplete) {
              this.quote.splice(index,1);
          }
         }
            constructor() {}

            ngOnInit() {
            }
          
          }