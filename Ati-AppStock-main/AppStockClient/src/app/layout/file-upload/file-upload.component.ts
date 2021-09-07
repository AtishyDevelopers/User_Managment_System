import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public progress: number = 0;
  public message: string = '';
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  upload(files: any) {    
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', this.baseUrl+`/api/Users/upload`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {      
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / (event.total?? 100));
      else if (event.type === HttpEventType.Response){
        this.message = "Upload Successful.";
        //this.message = <string>event.body//.toString();  
        let msg = <any>event.body;  
        console.log(msg.path)            
      }        
    });
  }

  ngOnInit(): void {
  }

}
