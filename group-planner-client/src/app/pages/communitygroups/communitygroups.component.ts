import { Component, OnInit } from '@angular/core';
import { CommunityGroupService } from '../../services/communitygroup.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './communitygroups.component.html'
})
export class CommunityGroupsComponent implements OnInit {

  communityGroups: any[] = [];

  name = '';
  description = '';

  constructor(private communityGroupService: CommunityGroupService) {}

  ngOnInit() {
    this.loadCommunityGroups();
  }

  loadCommunityGroups() {
    this.communityGroupService.getCommunityGroups().subscribe(res => {
      this.communityGroups = res;
    });
  }

  createCommunityGroup() {
    this.communityGroupService.createCommunityGroup({
      name: this.name,
      description: this.description
    }).subscribe(() => {
      this.name = '';
      this.description = '';
      this.loadCommunityGroups();
    });
  }
}
