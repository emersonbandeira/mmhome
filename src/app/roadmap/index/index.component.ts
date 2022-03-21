import { Component, OnInit } from '@angular/core';
import { RoadmapService } from '../roadmap.service';
import { Roadmap } from '../roadmap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})



export class IndexComponent implements OnInit {
      
  roadmaps: Roadmap[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public roadmapService: RoadmapService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.roadmapService.getAll().subscribe((data: Roadmap[])=>{
      this.roadmaps = data;
      console.log(this.roadmaps);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteRoadmap(id:number){
    this.roadmapService.delete(id).subscribe(res => {
         this.roadmaps = this.roadmaps.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
    
}