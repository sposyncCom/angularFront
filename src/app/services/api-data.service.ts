import { Injectable, Inject, Renderer2,RendererFactory2  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { LoginMainComponent  } from '../login-main/login-main.component';
import { Router, } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


@Injectable()

export class ApiDataService {

  private baseUrl = "http://13.124.146.19/api/";
  private authUrl = "http://13.124.146.19/api/auth/";
  private httpOptions: any;
  private httpOptionsToken: any;
  private httpOptionsTokenFile: any;
  private renderer: Renderer2;
  mapKey :any;
  ivArg:any;
  is_authenticated : boolean = false;
  token :any;
  obuser :any;
  token_expires: Date = new Date(0);


  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2, private router : Router, ){

      this.renderer = rendererFactory.createRenderer(null, null);

      this.httpOptions = {
        'headers': new HttpHeaders({'Content-Type': 'application/json'}),
        //'Authorization': 'JWT ' + this._userService.token // tokeon from LOGIN comp
      };

      this.httpOptionsToken = {
        'headers': new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization': "JWT " + this.token })// token from LOGIN comp    
        'Authorization': localStorage.getItem("SavedToken") })
      };  

      this.httpOptionsTokenFile = {
        'headers': new HttpHeaders({
        'Content-Type':  'multipart/form-data',
        'Accept': '*/*',  
        'Authorization': localStorage.getItem("SavedToken"),      
        'content-disposition': 'form-data; name={'+localStorage.getItem("iconSaved")+'}'
      })
      };  
  }


  createFeedback(posts:any){

    return this.http.post(this.baseUrl+"userCommentApi/", posts, this.httpOptions);
  }

   
  loginGet(){

    return this.http.get(this.baseUrl+"loginget/", this.httpOptions);
  }


  login(user:any){

    return this.http.post(this.baseUrl+"login/", JSON.stringify(user), this.httpOptions);
  }


  eventRegisterGet(userInfo:any) {

    let params = new HttpParams().set("userName",userInfo);  
    return this.http.get(this.baseUrl+"eventregisterget/", {headers: this.httpOptionsToken, params: params});
  }


  eventRegisterKwargs(ownerEventId:any){

    let params = new HttpParams().set("ownerEventId",ownerEventId);
    return this.http.get(this.baseUrl+"eventregisterkwargs/", {headers: this.httpOptionsToken, params: params});
  }


  locRegister(locRegUpDel:any){

    return this.http.post(this.baseUrl+"locationregister/", JSON.stringify(locRegUpDel),  this.httpOptionsToken );
  }


  evRegister(evRegUpDel:any){

    return this.http.post(this.baseUrl+"eventregister/", JSON.stringify(evRegUpDel), this.httpOptionsToken);
  }


  evRegisterFile(evRegUpDelFile:any){

    return this.http.post(this.baseUrl+"eventregisterFile/", evRegUpDelFile, this.httpOptionsTokenFile);
  }


  refreshToken(tokenRefresh:any) {

    return this.http.post(this.baseUrl+"login/refresh/", JSON.stringify(tokenRefresh), this.httpOptions);
  }


  infoGet(userInfo:any) {

    let params = new HttpParams().set("userName",userInfo)    
    return this.http.get(this.baseUrl+"infoget/", {headers: this.httpOptionsToken, params: params});
  }


  searchEvent(newEvent:any) {

    let params = new HttpParams().set("searchEventType",newEvent.eventData.eventType).set("searchEventNote",newEvent.eventData.eventNote).set("searchName",newEvent.userName)
    return this.http.get(this.baseUrl+"searchevent/",  {headers: this.httpOptionsToken, params: params});
  }


  selectEvent(newSelect:any) {

    return this.http.post(this.baseUrl+"selectevent/", JSON.stringify(newSelect), this.httpOptionsToken);
  }


  requestPEvent(newPEvent:any) {

    return this.http.post(this.baseUrl+"requestpevent/", JSON.stringify(newPEvent), this.httpOptionsToken); 
  }


  disconnectEvent(disconEvent:any) {

    return this.http.post(this.baseUrl+"disconnectevent/", JSON.stringify(disconEvent), this.httpOptionsToken);    
  }


  hostEvent(newHost:any) {

    let params = new HttpParams().set("hostName",newHost)
    return this.http.get(this.baseUrl+"hostevent/",  {headers: this.httpOptionsToken, params: params});
  }


  p2pCallGet(callerName:any) {

    let params = new HttpParams().set("hostName",callerName)
    return this.http.get(this.baseUrl+"p2pcallget/",  {headers: this.httpOptionsToken, params: params});
  }


  p2pCallPost(calleeAPI:any) {

    return this.http.post(this.baseUrl+"p2pcallpost/", JSON.stringify(calleeAPI), this.httpOptionsToken);
  }


  p2pLabGet(callerName:any) {

    let params = new HttpParams().set("hostName",callerName)
    return this.http.get(this.baseUrl+"p2plabget/",  {headers: this.httpOptionsToken, params: params});
  }


  p2pLabPost(calleeAPI:any) {

    return this.http.post(this.baseUrl+"p2plabpost/", JSON.stringify(calleeAPI), this.httpOptionsToken);
  }


  signUpPost(registerUser:any) {

    return this.http.post(this.authUrl+"register/", JSON.stringify(registerUser), this.httpOptions);    
  }


  profileGet() {

    return this.http.get(this.authUrl+"user/", this.httpOptionsToken);    
  }


  profilePost(updateUser:any) {

    return this.http.post(this.authUrl+"user/", JSON.stringify(updateUser), this.httpOptionsToken);    
  }


  logout() {

    this.token = '';
    this.token_expires = new Date(0) ;
    this.obuser='';
    this.router.navigateByUrl('/index-index');
    return this.http.get(this.baseUrl+"logout/", this.httpOptionsToken); 
  }


  loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const body = <HTMLDivElement> this.document.body;
      const script = this.document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = true;
      script.defer = true;
      body.appendChild(script);    
    })
  }


  mapLoadScript(url: string)  {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.text = ``;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer.appendChild(this.document.body, script);
    })
  }




}

