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
    return this.http.get<FetchAllStudentResponse>(this.API_SERVER); //http://localhost:3800/api/estudiantes/
  }

  public detail(id: string): Observable<FetchAllStudentResponseDetail>{
    return this.http.get<FetchAllStudentResponseDetail>(this.API_SERVER + id); //http://localhost:3800/api/estudiantes/41254121521
  }

  public save(estudiante: Estudiante):Observable<FetchAllStudentResponseDetail>{
    return this.http.post<FetchAllStudentResponseDetail>(this.API_SERVER, estudiante); //http://localhost:3800/api/estudiantes/
  }

  public update(id: string, estudiante:Estudiante):Observable<FetchAllStudentResponseDetail>{
    return this.http.put<FetchAllStudentResponseDetail>(this.API_SERVER + id, estudiante); //http://localhost:3800/api/estudiantes/41254121521
  }

  public delete(id:string):Observable<FetchAllStudentResponseDetail>{
    return this.http.delete<FetchAllStudentResponseDetail>(this.API_SERVER + id); //http://localhost:3800/api/estudiantes/41254121521
  }
}
