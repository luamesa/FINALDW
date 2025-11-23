import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private API = "http://localhost:5000/api";

  constructor(private http: HttpClient) {}

private getHeaders() {
  const token = localStorage.getItem("token");
  return new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
}


getMyReviews() {
  return this.http.get(`${this.API}/reviews`, {
    headers: this.getHeaders()
  });
}


  getReview(id: string) {
    return this.http.get(`${this.API}/reviews/${id}`, {
      headers: this.getHeaders()
    });
  }

  createReview(data: any) {
    return this.http.post(`${this.API}/reviews`, data, {
      headers: this.getHeaders()
    });
  }

  updateReview(id: string, data: any) {
    return this.http.put(`${this.API}/reviews/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  deleteReview(id: string) {
    return this.http.delete(`${this.API}/reviews/${id}`, {
      headers: this.getHeaders()
    });
  }
}
