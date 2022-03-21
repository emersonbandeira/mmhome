import { Component, OnInit } from '@angular/core';


import { RoadmapService } from '../roadmap.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Roadmap } from '../roadmap';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
     
  id!: number;
  roadmap!: Roadmap;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public roadmapService: RoadmapService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['roadmapId'];
        
    this.roadmapService.find(this.id).subscribe((data: Roadmap)=>{
      this.roadmap = data;
    });
  }
    
}

