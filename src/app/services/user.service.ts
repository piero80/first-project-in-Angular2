 import { Injectable } from '@angular/core';
    import { Http, Response } from '@angular/http';
    import { Observable } from 'rxjs/observable';
    import { IUser,IAlbum } from '../models/user';
    import 'rxjs/add/operator/catch'
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/do';

    @Injectable()
    export class DataService{

    private data:string[]=["Rajesh","suresh","ramu"];
    private url:string = "http://dati.lazio.it/catalog/api/action/datastore_search?resource_id=4a5a084c-b63c-4f4d-b3f0-b1163c0ad077";

    constructor(private _http:Http){

    }

    getEmployees(): Observable<IUser[]>{
    return this._http.get(this.url)
    .map((response:Response)=><IUser[]>response.json().result.records)
    .do(data=>console.log("All : "+JSON.stringify(data)))
    .catch(this.HandleError);
    }

    getAlbums(id):Observable<any>{

    return this._http.get("http://jsonplaceholder.typicode.com/photos?albumId="+id)
    .map((response:Response)=><IAlbum[]>response.json())
    .do(data=>console.log("album "+JSON.stringify(data)))
    .catch(this.HandleError);       

    }


    private HandleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || "server error");
    }

    addEmployee(name){
        this.data.push(name);
    }

    }