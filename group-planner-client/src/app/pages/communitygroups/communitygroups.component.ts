import { Component, OnInit } from '@angular/core';
import { CommunityGroupService } from '../../services/communitygroup.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './communitygroups.component.html',
  styleUrls: ['./communitygroups.component.css']
})
export class CommunityGroupsComponent implements OnInit {

  communityGroups: any[] = [];

  name = '';
  description = '';

  constructor(
  private communityGroupService: CommunityGroupService,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit() {
    this.loadCommunityGroups();
  }

  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  loadCommunityGroups() {
    this.communityGroupService.getCommunityGroups().subscribe(res => {
      this.communityGroups = res;

      this.cdr.detectChanges();
    });
  }

  creating = false;

  createCommunityGroup() {
    if (this.creating) return;

    this.creating = true;

    this.communityGroupService.createCommunityGroup({
      name: this.name,
      description: this.description
    }).subscribe({
      next: () => {
        this.name = '';
        this.description = '';
        this.showForm = false;
        this.loadCommunityGroups();
        this.creating = false;
      },
      error: () => {
        this.creating = false;
      }
    });
  }
}
