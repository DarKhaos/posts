import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['userId', 'title', 'body'];

  dataSource = new MatTableDataSource<Post>([]);

  private subscription = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private userService: PostService) {}

  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe({
        next: (response) => {
          this.dataSource = new MatTableDataSource<Post>(response);
          this.dataSource.paginator = this.paginator;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
