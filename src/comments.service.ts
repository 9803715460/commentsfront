import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comments } from './models/comments';

@Injectable()
export class CommentsService {
    private apiURL = "http://localhost:8080";

    constructor(private http: HttpClient) { }


    getcomments(): Observable<Comments[]> {
        return this.http.get<Comments[]>(this.apiURL + "/showcomment");
    }

    addcomment(value): any {
        let comment= {
            comments: value,
            commentBy: "himanshu"
        }
        return this.http.post(this.apiURL + "/addcomment", comment);
    }
}
