import { Component, OnInit } from '@angular/core';
import { AssignedTask, Tasks, Users } from 'src/modal/user.modal';
import { UsersService } from 'src/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from 'src/services/tasks.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  userList: Users[] = [];
  filteredUsers: Users[] = [];
  taskList: Tasks[] = [];
  userTaskList: AssignedTask[] = [];
  userTasks: AssignedTask[] = [];
  activeUserRole = 'admin';
  postTask: AssignedTask = {
    id: 0,
    userid: 0,
    selecttask: '',
    taskid: 0,
    startdate: '',
    enddate: '',
    taskcode: '',
    taskpriority: '',
    username: '',
    task_completed: '',
  };
  assigntaskform!: FormGroup;
  username!: FormControl;
  userid!: FormControl;
  selecttask!: FormControl;
  taskid!: FormControl;
  startdate!: FormControl;
  enddate!: FormControl;
  taskcode!: FormControl;
  taskpriority!: FormControl;

  constructor(
    private userObj: UsersService,
    private taskObj: TasksService,
    private message: MessageService
  ) { }
  ngOnInit(): void {
    this.taskObj.getTasks().subscribe((res) => {
      this.taskList = res;
    });

    this.taskObj.getAssignedTasks().subscribe(
      (response) => {
        this.userTaskList = response;
      }
    )

    this.userObj.getUsersActive().subscribe(
      (response) => {
        this.activeUserRole = response[0].role;
        console.log(this.activeUserRole);
      }
    );
    this.userObj.confirmLogin.subscribe(
      res => {
        if (res == true) {
          this.ngOnInit();
        }
      }
    )
    this.username = new FormControl('', []);
    this.userid = new FormControl('', []);
    this.selecttask = new FormControl('', []);
    this.taskid = new FormControl('', []);
    this.startdate = new FormControl('', []);
    this.enddate = new FormControl('', []);
    this.taskcode = new FormControl('', []);
    this.taskpriority = new FormControl('', []);
    this.assigntaskform = new FormGroup({
      username: this.username,
      userid: this.userid,
      selecttask: this.selecttask,
      taskid: this.taskid,
      startdate: this.startdate,
      enddate: this.enddate,
      taskcode: this.taskcode,
      taskpriority: this.taskpriority,
    });
    this.userObj.getUsers().subscribe((res) => {
      this.userList = res;
      for (const task of this.userTaskList) {
        for (const user of this.userList) {
          if (user.id == task.userid) {
            if (task.task_completed == 'true') {
              this.filteredUsers.push(user);
              break;
            }
          }
        }
      }
    });


    
    //Get Task Lists
    this.taskObj.getAssignedTasks().subscribe(
      (response) => {
        this.userTasks = response;
      }
    );
  }
  assignTask(user: Users) { }
  onSubmission(form: FormGroup) {
    form.value.task_completed = false;
    this.taskObj.posttTasks(form.value);
    this.message.add({
      severity: 'success',
      summary: 'Assigned',
      detail: 'Task Assigned Successfully',
    });
  }
  setInputFields(user: Users) {
    this.username.setValue(user.username);
    this.userid.setValue(user.id);
  }
  setTask(taskname: string) {
    for (const task of this.taskList) {
      if (task.task_name === taskname) {
        this.taskid.setValue(task.id);
        this.taskcode.setValue(task.task_code);
        this.taskpriority.setValue(task.priority);
        this.startdate.setValue(task.start_date);
        this.enddate.setValue(task.end_date);
      }
    }
  }
  setStatus(task: AssignedTask) {
    this.postTask = task;
  }
  postStatus(postTask: AssignedTask) {
    this.taskObj.putTask(postTask);
    this.ngOnInit();
  }
}
