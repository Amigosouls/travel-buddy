import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  
productID !:string | null;
  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productID = this.router.snapshot.paramMap.get('id');
  }
}
