import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-async',
  templateUrl: './file-upload-async.component.html',
  styleUrls: ['./file-upload-async.component.scss']
})
export class FileUploadAsyncComponent implements OnInit {
  public progress: number = 0;
  public message: string = '';
  imgpath: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('http://localhost:5000/api/Users/uploadasync', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / (event.total as number));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
                    
          let resp =  JSON.parse(JSON.stringify(event.body));
          this.imgpath = resp.dbPath;
          console.log(this.imgpath);          
        }
      });
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }

}
