import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CommunityGroupService {

  private baseUrl = API_CONFIG.baseUrl + '/communitygroups';

  constructor(private http: HttpClient) {}

  getCommunityGroups() {
    return this.http.get<any[]>(this.baseUrl);
  }

  createCommunityGroup(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
