import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './review-form.html',
  styleUrls: ['./review-form.css'],
})
export class ReviewFormComponent implements OnInit {

  titulo = "";
  descripcion = "";
  calificacion = 0;
  stars = [1, 2, 3, 4, 5];

  isEditing = false;
  reviewId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: ReviewService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reviewId = this.route.snapshot.paramMap.get("id");

    if (this.reviewId) {
      this.isEditing = true;
      this.loadReview();
    }
  }

  loadReview() {
    this.service.getReview(this.reviewId!).subscribe((r: any) => {
      this.titulo = r.titulo;
      this.descripcion = r.descripcion;
      this.calificacion = r.calificacion;
    });
  }

  setRating(value: number) {
    this.calificacion = value;
  }

  save() {
    if (!this.titulo || !this.descripcion || this.calificacion === 0) {
      alert("Complete todos los campos");
      return;
    }

    const data = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      calificacion: this.calificacion
    };

    if (this.isEditing) {
      this.service.updateReview(this.reviewId!, data).subscribe(() => {
        alert("Reseña actualizada");
        this.router.navigate(['/reviews']);
      });
    } else {
      this.service.createReview(data).subscribe(() => {
        alert("Reseña creada");
        this.router.navigate(['/reviews']);
      });
    }
  }

}
