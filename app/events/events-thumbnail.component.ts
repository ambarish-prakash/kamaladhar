import { Component,Input } from '@angular/core'

 @Component({
    selector: 'e-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2> {{event.name}} </h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.date}}</div>
            <div>
                <span>Location: {{event.location.add}}</span>
                <span>&nbsp;</span>
                <span> {{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
        `,
             styles:[`
             .thumbnail {min-height: 210px;}
             .well div {color: #889ddd; }
             .pad-left { margin-left: 10px; }
             `]
 })
 export class EventsThumbnailComponent{
    @Input() event:any
 }