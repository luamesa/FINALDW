import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class Reviews implements OnInit {

  reviews: any[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.load();
  }

load() {
  this.reviewService.getMyReviews().subscribe((res: any) => {
    console.log("📥 RESPUESTA DEL BACKEND:", res);
    this.reviews = [...res]; 
    console.log("📌 reviews asignado:", this.reviews);
  });
}




  delete(id: string) {
    if (!confirm("¿Desea eliminar esta reseña?")) return;

    this.reviewService.deleteReview(id).subscribe(() => {
      this.load();
    });
  }

  getStars(num: number) {
    return Array(num).fill(0);
  }
}
