import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchAllStudentResponse, Estudiante, FetchAllStudentResponseDetail } from '../interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private API_SERVER = "http://localhost:3800/api/estudiantes/";

  constructor(private http: HttpClient) { }

  public lista(): Observable<FetchAllStudentResponse>{
    return this.http.get<FetchAllStudentResponse>(this.API_SERVER);
  }

  public detail(id: string): Observable<FetchAllStudentResponseDetail>{
    return this.http.get<FetchAllStudentResponseDetail>(this.API_SERVER + id)
  }

  public save(estudiante: Estudiante):Observable<FetchAllStudentResponse>{
    return this.http.post<FetchAllStudentResponse>(this.API_SERVER, estudiante);
  }

  public update(id: string, estudiante:Estudiante):Observable<FetchAllStudentResponse>{
    return this.http.put<FetchAllStudentResponse>(this.API_SERVER + id, estudiante)
  }

  public delete(id:string):Observable<FetchAllStudentResponse>{
    return this.http.delete<FetchAllStudentResponse>(this.API_SERVER + id);
  }

}
